'use server';
/**
 * @fileOverview A Genkit flow that generates a concise summary for an insurance service.
 *
 * - aiServiceSummary - A function that handles the generation of an AI-powered service summary.
 * - AIServiceSummaryInput - The input type for the aiServiceSummary function.
 * - AIServiceSummaryOutput - The return type for the aiServiceSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIServiceSummaryInputSchema = z.object({
  serviceName: z.string().describe('The name of the insurance service.'),
  serviceDescription: z.string().describe('A detailed description of the insurance service.'),
});
export type AIServiceSummaryInput = z.infer<typeof AIServiceSummaryInputSchema>;

const AIServiceSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise, AI-generated summary of the insurance service.'),
});
export type AIServiceSummaryOutput = z.infer<typeof AIServiceSummaryOutputSchema>;

export async function aiServiceSummary(input: AIServiceSummaryInput): Promise<AIServiceSummaryOutput> {
  return aiServiceSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceSummaryPrompt',
  input: { schema: AIServiceSummaryInputSchema },
  output: { schema: AIServiceSummaryOutputSchema },
  prompt: `You are an AI assistant specialized in summarizing insurance services.

Generate a concise and engaging summary for the following insurance service. Focus on its key benefits and what it offers customers.

Service Name: {{{serviceName}}}
Service Description: {{{serviceDescription}}}`,
});

const aiServiceSummaryFlow = ai.defineFlow(
  {
    name: 'aiServiceSummaryFlow',
    inputSchema: AIServiceSummaryInputSchema,
    outputSchema: AIServiceSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
