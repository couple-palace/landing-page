// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState(Array(18).fill(null)); // Track answers for all questions
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false); // New state for modal visibility

  // 퀴즈 데이터
  const quizQuestions = [
    {
      question_idx: 1,
      question: "Crush 생겼음. 너의 첫 행동은?",
      answer: [
        "이건 운명이다. DM 보낸다. 아님 대화 걸어야지 (안 하면 내가 뒤짐)",
        "일단 주변 탐색부터. 스토리 염탐 + 지인 통해 성향 분석",
        "친구한테 당장 소개팅 자리 만들어 달라고 함",
        "그냥 혼자 짝사랑하다 그 사람이 애인 생기면 속상해하면서 마음 접음",
      ],
    },
    {
      question_idx: 2,
      question: "연애할 때 제일 중요한 거?",
      answer: [
        "성격이랑 가치관이 맞아야 함",
        "그냥 나를 좋아해줬으면 좋겠음",
        "같이 있어도 안 피곤한 게 중요함",
        "일단 재미있어야 함",
      ],
    },
    {
      question_idx: 3,
      question: "연인과 싸웠음. 너의 태도는?",
      answer: [
        "일단 미안하다고 하고 화 풀어줌",
        "나 서운했는데...? (근데 너가 먼저 눈치채고 풀어줬어야지)",
        "'이거 왜 싸우는지 논리적으로 설명해봐' (감정보다 논리)",
        "'아니 근데 내가 그걸 말로 해야 해…? ㅋㅋㅋ' (눈치 못 챘다고 더 빡침)",
      ],
    },
    {
      question_idx: 4,
      question: "연애하면서 가장 듣고 싶은 말은?",
      answer: [
        "너랑 있으면 진짜 안정돼. 같이 있으면 아무 걱정 없음",
        "너랑 있으면 그냥 다른 차원의 세계가 열리는 기분이야",
        "'와 진짜 너만큼 내 기분 잘 맞춰주는 사람 처음 봄'",
        "'우리 둘이 이렇게 만난 거 진짜 온 우주가 계획한 거 아닐까?'",
      ],
    },
  ];

  const handleAnswerSelect = (index) => {
    // Store the selected answer
    setSelectedAnswer(index);

    // Create a copy of the current answers array
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = index;
    setUserAnswers(newAnswers);

    // Move to the next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Reset selected answer for the new question
      } else {
        // Quiz is complete
        setIsQuizCompleted(true);
        // Here you could navigate to results page or show results
        console.log("Quiz completed! User answers:", newAnswers);
      }
    }, 500); // Short delay before moving to next question
  };

  // Function to go to previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(userAnswers[currentQuestionIndex - 1]);
    }
  };

  // Function to manually go to next question without changing answer
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(userAnswers[currentQuestionIndex + 1]);
    } else if (userAnswers.every((answer) => answer !== null)) {
      // If all questions have been answered
      setIsQuizCompleted(true);
      // Show the modal instead of immediately navigating
      setShowModal(true);
    }
  };

  // Function to open test website in new tab
  const openTestWebsite = () => {
    window.open("https://www.couplegungjeon.store", "_blank", "noopener,noreferrer");
    // Close the modal if it's open
    setShowModal(false);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen text-white font-sans" style={{ backgroundColor: "#2A2E3D" }}>
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#f8e9ca] flex items-center">
          커플 궁전
        </div>
        <button className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 px-4 py-2 rounded-button whitespace-nowrap cursor-pointer flex items-center shadow-lg transition-colors duration-300" onClick={openTestWebsite}>
          <i className="fas fa-share-alt mr-2"></i>
          공유하기
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#f8e9ca] leading-tight">
                커플 궁전
                <br />
                프로필 테스트
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-amber-100">
                연애, 결혼 가치관을 분석하고 커플궁전에 나가보세요!
              </p>
              <p className="text-lg mb-8 text-indigo-200">
                재미있는 퀴즈로 당신만의 개성이 담긴 커플 궁전 프로필을 만들어
                드려요
              </p>
              <button
                className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 px-10 py-4 text-xl font-bold rounded-button whitespace-nowrap cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={openTestWebsite}
              >
                {isHovered ? "지금 시작하기 →" : "테스트 시작하기"}
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#f8e9ca] shadow-2xl transform transition-all duration-500 hover:scale-105">
                <img
                  src="https://www.couplegungjeon.store/assets/profile_sample-CPtVUX1d.png"
                  alt="커플 궁전 프로필"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-950 p-6 text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Example Section */}
      <section className="py-16 backdrop-blur-sm" style={{ backgroundColor: "rgba(42, 46, 61, 0.5)" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#f8e9ca]">
            <i className="fas fa-question-circle mr-2"></i>
            퀴즈 예시
          </h2>

          <div className="max-w-3xl mx-auto bg-indigo-800 bg-opacity-50 rounded-2xl overflow-hidden shadow-2xl border border-indigo-700">
            {/* Progress Bar */}
            <div className="w-full h-3 bg-indigo-700">
              <div
                className="h-full bg-[#f8e9ca]"
                style={{ width: `${(currentQuestionIndex / quizQuestions.length) * 100}%` }}
              ></div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <p className="text-[#f8e9ca] font-medium mb-2">
                  질문 {quizQuestions[currentQuestionIndex].question_idx}
                </p>
                <h3 className="text-2xl font-bold text-white mb-8">
                  {quizQuestions[currentQuestionIndex].question}
                </h3>

                <div className="space-y-4">
                  {quizQuestions[currentQuestionIndex].answer.map((answer, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedAnswer === index
                          ? "bg-[#f8e9ca] text-indigo-950 border-2 border-[#ffd06e]"
                          : "bg-indigo-700 hover:bg-indigo-600 border-2 border-indigo-600"
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <p className="font-medium">{answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  className={`px-6 py-3 ${
                    currentQuestionIndex > 0
                      ? "bg-indigo-700 hover:bg-indigo-600"
                      : "bg-indigo-700 opacity-50"
                  } rounded-button whitespace-nowrap ${
                    currentQuestionIndex > 0 ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  이전 질문
                </button>
                <button
                  className="px-6 py-3 bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300"
                  onClick={currentQuestionIndex < quizQuestions.length - 1 ? handleNextQuestion : () => setShowModal(true)}
                >
                  {currentQuestionIndex < quizQuestions.length - 1 ? "다음 질문" : "결과 보기"}
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "#2A2E3D" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#f8e9ca]">
            커플궁전 주요 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-indigo-800 bg-opacity-50 rounded-2xl p-8 shadow-xl transform transition duration-300 hover:translate-y-[-10px] border border-indigo-700">
              <div className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg transition-colors duration-300">
                <i className="fas fa-id-card text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6 text-[#f8e9ca]">
                프로필 관리
              </h3>
              <ul className="text-indigo-100 space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>질문 목록(questionsList) 기반 프로필 생성</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>직업(job) 정보 포함 프로필 생성</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>프로필 조회/수정/삭제 기능</span>
                </li>
              </ul>
            </div>
            {/* Feature 2 */}
            <div className="bg-indigo-800 bg-opacity-50 rounded-2xl p-8 shadow-xl transform transition duration-300 hover:translate-y-[-10px] border border-indigo-700">
              <div className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg transition-colors duration-300">
                <i className="fas fa-image text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6 text-[#f8e9ca]">
                사진 처리
              </h3>
              <ul className="text-indigo-100 space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>이미지 배경 제거 기능</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>이미지 업로드 및 처리</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>프로필 이미지 커스터마이징</span>
                </li>
              </ul>
            </div>
            {/* Feature 3 */}
            <div className="bg-indigo-800 bg-opacity-50 rounded-2xl p-8 shadow-xl transform transition duration-300 hover:translate-y-[-10px] border border-indigo-700">
              <div className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg transition-colors duration-300">
                <i className="fas fa-code text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6 text-[#f8e9ca]">
                기술 스택
              </h3>
              <ul className="text-indigo-100 space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>React 19, Vite 6, React Router DOM 7</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>상태 관리: Zustand 5, HTTP: Axios</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#f8e9ca] mt-1 mr-3"></i>
                  <span>스타일링: Tailwind CSS 4, Framer Motion 12</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20" style={{ backgroundColor: "#2A2E3D" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#f8e9ca]">
            <i className="fas fa-crown mr-2"></i>
            이런 프로필을 받아보세요
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="w-full md:w-1/2 max-w-md bg-indigo-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
              <div className="p-1 bg-[#f8e9ca]">
                <div className="bg-indigo-900 p-8 rounded-t-lg">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#f8e9ca] mb-2">
                      문상휘
                    </h3>
                    <p className="text-indigo-200 mb-6">
                      '연애는 경찰, 연락은 수사 중'
                    </p>
                    <div className="w-64 h-64 mx-auto relative rounded-full overflow-hidden border-4 border-[#f8e9ca] shadow-lg">
                      <img
                        src="https://static.readdy.ai/image/4d250d9e52492842633089b2e365d0bf/59f3cd7874a9e0564b3f037415208a03.png"
                        alt="프로필 예시"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-indigo-800 rounded-lg">
                      <span className="text-indigo-200">결혼 가치관:</span>
                      <span className="text-[#f8e9ca] font-medium">
                        엑셀로 짜는 결혼 예산
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-indigo-800 rounded-lg">
                      <span className="text-indigo-200">주말의 모습:</span>
                      <span className="text-[#f8e9ca] font-medium">
                        주말은 외출의 날
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-indigo-800 rounded-lg">
                      <span className="text-indigo-200">MBTI:</span>
                      <span className="text-[#f8e9ca] font-medium">ISFJ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-800 p-4 flex justify-center">
                <button className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 px-6 py-3 rounded-button whitespace-nowrap cursor-pointer shadow-lg transition-colors duration-300" onClick={openTestWebsite}>
                  <i className="fas fa-share-alt mr-2"></i>
                  프로필 공유하기
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <div className="bg-indigo-900 rounded-2xl p-8 shadow-2xl border border-indigo-700">
                <h3 className="text-2xl font-bold mb-6 text-[#f8e9ca]">
                  결혼가치관
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg transition-colors duration-300">
                      <i className="fas fa-calculator"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#f8e9ca] mb-2">
                        1. 엑셀로 짜는 결혼 예산
                      </h4>
                      <p className="text-indigo-200">
                        결혼 준비는 다이너마이트급으로 화려하게! 예산 정리부터
                        플래너 계약까지 엑셀로 완벽하게 정리하자. 신혼가전 사전
                        조사 완료는 기본, 이건 마치 결혼 준비의 마스터 클래스야!
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg transition-colors duration-300">
                      <i className="fas fa-home"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#f8e9ca] mb-2">
                        2. 주말은 외출의 날
                      </h4>
                      <p className="text-indigo-200">
                        집에서 뒹굴 뒹굴하는 건 NO! 결혼 후 주말은 아침부터 옷을
                        차려입고 나가서 신나게 놀아야 해. 집에 있으면
                        답답하니까, 즐길 준비가 되어 있는 사람만 오세요!
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg transition-colors duration-300">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#f8e9ca] mb-2">
                        3. 웃음이 넘치는 가정
                      </h4>
                      <p className="text-indigo-200">
                        결혼 후에는 인생의 힘든 순간들을 웃음으로 날려버리자!
                        웃기는 사람과 함께해야 인생이 더 빛세지. 자, 이제 당신의
                        유머 감각을 테스트해볼 시간!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#2A2E3D" }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#f8e9ca]">
            지금 바로 나만의 프로필 만들기
          </h2>
          <p className="text-xl mb-10 text-indigo-200 max-w-2xl mx-auto">
            재미있는 질문에 답하고 당신만의 특별한 커플 궁전 프로필을
            받아보세요. 친구들과 공유하고 서로의 결과를 비교해보세요!
          </p>
          <button className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 px-10 py-5 text-xl font-bold rounded-button whitespace-nowrap cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-xl" onClick={openTestWebsite}>
            테스트 시작하기
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: "rgba(42, 46, 61, 0.7)" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#f8e9ca]">
            <i className="fas fa-users mr-2"></i>
            개발팀 소개
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: '이지민', role: '프론트엔드, UI', img: 'https://avatars.githubusercontent.com/u/131771046?v=4', github: 'https://github.com/clicelee' },
              { name: '이주원', role: '프론트엔드', img: 'https://avatars.githubusercontent.com/u/89000730?v=4', github: 'https://github.com/juwonleee' },
              { name: '이강희', role: '백엔드 개발', img: 'https://avatars.githubusercontent.com/u/79368467?v=4', github: 'https://github.com/Ganghee-Lee-0522' },
              { name: '이소민', role: '백엔드, AI 개발', img: 'https://avatars.githubusercontent.com/u/132176662?v=4', github: 'https://github.com/somin850' },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-indigo-800 bg-opacity-50 rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:translate-y-[-10px] border border-indigo-700"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#f8e9ca] mb-2">{member.name}</h3>
                  <p className="text-indigo-200 mb-4">{member.role}</p>
                  <div className="mt-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-100 hover:text-[#f8e9ca] transition"
                    >
                      <i className="fab fa-github text-xl mr-2"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-indigo-800" style={{ backgroundColor: "#2A2E3D" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold text-[#f8e9ca] mb-4 flex items-center">
                커플 궁전
              </div>
              <p className="text-indigo-300">
                © 2025 커플 궁전 프로필 테스트. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/couple-palace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-[#f8e9ca] transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div 
            className="bg-indigo-900 rounded-2xl p-8 shadow-2xl border border-[#f8e9ca] max-w-md w-full transform transition-all duration-300 scale-100"
            style={{ animation: "modalAppear 0.3s" }}
          >
            <div className="text-right mb-2">
              <button 
                onClick={closeModal}
                className="text-indigo-300 hover:text-[#f8e9ca] transition-colors duration-300"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#f8e9ca] flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-crown text-indigo-900 text-3xl"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-[#f8e9ca] mb-4">
                내 커플궁전 프로필 카드가 궁금하다면?
              </h3>
              
              <p className="text-indigo-200 mb-8">
                전체 테스트를 완료하고 나만의 맞춤형 커플궁전 프로필을 받아보세요!
              </p>
              
              <button 
                onClick={openTestWebsite}
                className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 px-10 py-4 text-xl font-bold rounded-button whitespace-nowrap cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-xl w-full"
              >
                테스트 하러가기
                <i className="fas fa-arrow-right ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default App;
