'use client';

import { Modal } from 'antd';

export default function CheckDetailsModal({ open, setOpen, checkListData, questions }) {
  const isValidUrl = (url) => {
    if (!url) return false;
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/');
  };

  // Determine the image source
  const imageSrc = isValidUrl(checkListData?.driverImg);

  return (
    <Modal centered open={open} footer={null} onCancel={() => setOpen(false)} width={800}>
      <div className="grid grid-cols-1 gap-7 px-12 py-8">
        <div className="text-black">
          <h5 className="font-bold text-xl mb-2">Questions & Answers</h5>
          {questions?.length > 0 ? (
            <ul className="font-dmSans text-base">
              {questions.map((q, index) => (
                <li key={q._id} className="mb-2">
                  <p>
                    <strong>Question:</strong> {q.question}
                  </p>
                  <p>
                    <strong>Answer:</strong> {q.answer}
                  </p>
                  {q.explanation && (
                    <p>
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-dmSans text-base">No questions available</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
