import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    // API key must be obtained exclusively from process.env.API_KEY
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const generateProjectAdvice = async (
  conversationHistory: { role: string; text: string }[],
  userMessage: string
): Promise<string> => {
  try {
    const ai = getClient();
    const model = 'gemini-3-flash-preview';

    const systemInstruction = `
      You are "Codism AI", a senior technical consultant for Codism.io.
      Your goal is to assist potential clients in planning their digital projects.
      
      Key Codism Context:
      - 16+ years experience, 100% satisfaction.
      - Experts in: Mobile (React Native, Flutter), Web (PHP, Python, Golang, NodeJS), and Emerging Tech (AI, IoT).
      - Core domains: eLearning, CRM, ERP.
      - Philosophy: "What we do, We do it with an Excellence".
      
      Style:
      - Professional, futuristic, concise, and helpful.
      - Ask clarifying questions if the user's idea is vague.
      - Suggest specific tech stacks based on Codism's expertise (e.g., if they want a shop, mention Magento or Custom Node; if they want an app, mention React Native).
      - Always encourage them to use the "Contact Us" form for a full proposal at the end of a conclusive advice session.
    `;

    // Convert history to format expected by Gemini 
    // Note: The new SDK encourages creating a chat session, but for stateless simplicity in this demo wrapper 
    // we will use generateContent with a constructed prompt or chat history if managing statefully.
    // For this implementation, we'll use a chat session.

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: conversationHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I apologize, I'm having trouble processing that request right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System offline. Please check your connection or try again later.";
  }
};