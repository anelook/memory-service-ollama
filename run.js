import { MemoryService }  from './memoryService.js';


const memoryService = new MemoryService();
await memoryService.storeMemory("Dora is a a german shepherd who lives with Bob");
const response = await memoryService.getRelevantMemory("Based on the additional context provided, who is Dora?");

console.log(response);
