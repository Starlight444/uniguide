// Mock reply for the prototype. Replace with a call to the FastAPI/RAG backend later.
export async function sendQuestion(question) {
  return {
    role: "assistant",
    content: `ขณะนี้ UniGuide ยังอยู่ในโหมดทดลอง จึงยังตอบคำถาม "${question}" ไม่ได้ ขั้นต่อไปเราจะเชื่อมระบบ RAG เพื่อค้นหาคำตอบจากเอกสารของมหาวิทยาลัย`,
  };
}
