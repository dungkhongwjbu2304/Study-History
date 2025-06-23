import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Học Lịch Sử Tương Tác</h1>
      <p className="mb-6 text-lg">Khám phá lịch sử Việt Nam và thế giới qua các hoạt động tương tác như trắc nghiệm, kéo thả và câu hỏi ngắn!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">📝 Trắc nghiệm</h2>
            <p className="mb-4">Kiểm tra kiến thức lịch sử qua các câu hỏi nhiều lựa chọn.</p>
            <Button onClick={() => setQuizStarted(true)}>Bắt đầu</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🧩 Kéo thả hình ảnh</h2>
            <p className="mb-4">Kéo thả nhân vật, sự kiện hoặc mốc thời gian vào vị trí đúng.</p>
            <Button disabled>Đang phát triển</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">✍️ Câu hỏi ngắn</h2>
            <p className="mb-4">Trả lời các câu hỏi mở để ôn tập và luyện tư duy.</p>
            <Button disabled>Đang phát triển</Button>
          </CardContent>
        </Card>
      </div>

      {quizStarted && (
        <div className="mt-8 p-4 border rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Câu hỏi trắc nghiệm</h2>
          <p>1. Ai là người chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam năm 1930?</p>
          <ul className="mt-2 space-y-2">
            <li><Button variant="outline">A. Phạm Văn Đồng</Button></li>
            <li><Button variant="outline">B. Trần Phú</Button></li>
            <li><Button variant="outline">C. Nguyễn Ái Quốc</Button></li>
            <li><Button variant="outline">D. Lê Hồng Phong</Button></li>
          </ul>
        </div>
      )}
    </div>
  );
}
