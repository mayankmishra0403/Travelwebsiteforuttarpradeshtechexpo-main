import { pipeline } from '@xenova/transformers';
import fs from 'fs/promises';

// Load the feature extraction pipeline
const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

// Function to generate embeddings
async function generateEmbeddings() {
  try {
    // Read the knowledge base
    const knowledgeBase = JSON.parse(await fs.readFile('knowledge.json', 'utf-8'));
    const faqs = knowledgeBase.faqs || [];

    if (faqs.length === 0) {
      console.log('No FAQs found in knowledge.json');
      return;
    }

    // Extract questions and generate embeddings
    const questions = faqs.map(faq => faq.question);
    const embeddings = await extractor(questions, { pooling: 'mean', normalize: true });

    // Create the RAG data structure
    const ragData = {
      questions: questions,
      answers: faqs.map(faq => faq.answer),
      embeddings: Array.from(embeddings.data),
    };

    // Save the RAG data to a file
    await fs.writeFile('rag-data.json', JSON.stringify(ragData, null, 2));
    console.log('Embeddings generated and saved to rag-data.json');
  } catch (error) {
    console.error('Error generating embeddings:', error);
  }
}

generateEmbeddings();
