# 커플 궁전 퀴즈 구현 설명

이 문서는 커플 궁전 프로필 테스트의 퀴즈 구현 방법에 대해 설명합니다.

## 목차

1. [퀴즈 구조 개요](#퀴즈-구조-개요)
2. [상태 관리](#상태-관리)
3. [주요 기능 구현](#주요-기능-구현)
4. [퀴즈 완료 모달](#퀴즈-완료-모달)
5. [개선 가능한 부분](#개선-가능한-부분)

## 퀴즈 구조 개요

커플 궁전 퀴즈는 React 컴포넌트로 구현되었으며, 사용자에게 일련의 질문을 표시하고 응답을 수집하는 방식으로 작동합니다. 각 질문은 네 가지 선택 가능한 답변을 가지며, 사용자의 선택에 따라 다음 질문으로 자동 진행됩니다.

퀴즈의 핵심 구성 요소:
- 질문 및 답변 데이터
- 진행 상태 표시 UI (프로그레스 바)
- 답변 선택 UI
- 이전/다음 질문 네비게이션
- 퀴즈 완료 시 결과 모달

## 상태 관리

퀴즈는 다음과 같은 React 상태를 사용하여 관리됩니다:

```jsx
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  // 현재 질문 인덱스
const [selectedAnswer, setSelectedAnswer] = useState(null);           // 현재 선택된 답변
const [userAnswers, setUserAnswers] = useState(Array(18).fill(null)); // 모든 질문의 응답을 저장
const [isQuizCompleted, setIsQuizCompleted] = useState(false);        // 퀴즈 완료 여부
const [showModal, setShowModal] = useState(false);                    // 모달 표시 여부
```

## 주요 기능 구현

### 1. 질문 데이터 구조

각 질문은 다음과 같은 구조로 정의됩니다:

```jsx
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
  // ... 더 많은 질문들
];
```

### 2. 답변 선택 처리

사용자가 답변을 선택했을 때의 로직:

```jsx
const handleAnswerSelect = (index) => {
  // 선택한 답변 저장
  setSelectedAnswer(index);

  // 사용자 답변 배열 업데이트
  const newAnswers = [...userAnswers];
  newAnswers[currentQuestionIndex] = index;
  setUserAnswers(newAnswers);

  // 짧은 딜레이 후 다음 질문으로 이동
  setTimeout(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // 다음 질문에 대한 선택 초기화
    } else {
      // 퀴즈 완료
      setIsQuizCompleted(true);
      setShowModal(true); // 마지막 질문 응답 후 자동으로 모달 표시
    }
  }, 500); // 500ms 딜레이로 전환 효과 제공
};
```

### 3. 이전 질문으로 이동

```jsx
const handlePrevQuestion = () => {
  if (currentQuestionIndex > 0) {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    // 이전에 선택했던 답변이 있으면 복원
    setSelectedAnswer(userAnswers[currentQuestionIndex - 1]);
  }
};
```

### 4. 다음 질문으로 수동 이동

자동 진행 외에도 '다음 질문' 버튼으로 수동 이동 가능:

```jsx
const handleNextQuestion = () => {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(userAnswers[currentQuestionIndex + 1]);
  } else if (userAnswers.every((answer) => answer !== null)) {
    // 모든 질문에 답변했으면
    setIsQuizCompleted(true);
    setShowModal(true); // 결과 모달 표시
  }
};
```

## 퀴즈 완료 모달

퀴즈가 완료되면 사용자에게 다음 단계로 안내하는 모달이 표시됩니다:

```jsx
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
    <div 
      className="bg-indigo-900 rounded-2xl p-8 shadow-2xl border border-[#f8e9ca] max-w-md w-full"
      style={{ animation: "modalAppear 0.3s" }}
    >
      {/* 모달 내용 */}
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
          className="bg-[#f8e9ca] hover:bg-[#ffd06e] text-indigo-950 px-10 py-4 text-xl font-bold rounded-button w-full"
        >
          테스트 하러가기
          <i className="fas fa-arrow-right ml-3"></i>
        </button>
      </div>
    </div>
  </div>
)}
```

## 개선 가능한 부분

현재 구현에서 개선 가능한 부분들:

1. **상태 관리 최적화**: 더 복잡한 퀴즈의 경우 Context API나 Redux 사용을 고려할 수 있습니다.

2. **답변 저장**: 현재는 메모리에만 저장되지만, 로컬 스토리지나 백엔드 서버에 저장하는 기능을 추가할 수 있습니다.

3. **진행 상태 세분화**: 프로그레스 바에 더 많은 정보를 포함하거나, 답변하지 않은 질문에 대한 표시를 추가할 수 있습니다.

4. **애니메이션 개선**: Framer Motion과 같은 라이브러리를 사용하여 질문 전환 애니메이션을 더 부드럽게 만들 수 있습니다.

5. **접근성 개선**: 키보드 네비게이션, 스크린 리더 지원 등을 추가하여 접근성을 높일 수 있습니다.

## 전체 퀴즈 컴포넌트 구현 예시

아래는 위 기능들을 포함한 간소화된 퀴즈 컴포넌트 예시입니다:

```jsx
import React, { useState } from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const handleSelect = (index) => {
    setSelected(index);
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      } else {
        setShowCompletionModal(true);
        onComplete?.(newAnswers);
      }
    }, 500);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelected(answers[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(answers[currentIndex + 1]);
    }
  };

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Question */}
      <div className="question">
        <h2>{currentQuestion.question}</h2>
        
        {/* Answer options */}
        <div className="answers">
          {currentQuestion.answer.map((text, idx) => (
            <div
              key={idx}
              className={`answer ${selected === idx ? 'selected' : ''}`}
              onClick={() => handleSelect(idx)}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <button
          disabled={currentIndex === 0}
          onClick={handlePrevious}
        >
          이전 질문
        </button>
        <button
          disabled={currentIndex === questions.length - 1}
          onClick={handleNext}
        >
          다음 질문
        </button>
      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>퀴즈 완료!</h3>
            <p>나의 프로필 결과를 확인하세요</p>
            <button onClick={() => window.location.href = '/results'}>
              결과 보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
```

이 예시는 실제 구현에 맞게 스타일링과 기능을 추가하여 확장할 수 있습니다.
