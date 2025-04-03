// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
// Consider adding these imports at the top if not already present in your project setup
// import '@fortawesome/fontawesome-free/css/all.min.css'; // For Font Awesome icons

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-navy-900 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-yellow-400">커플궁전</span>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-navy-900 px-4 py-2 rounded-button whitespace-nowrap text-sm font-medium cursor-pointer flex items-center">
          <i className="fas fa-share-alt mr-2"></i>
          공유하기
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-navy-900 to-navy-800 opacity-95"></div>
          <img 
            src="https://public.readdy.ai/ai/img_res/c6eb179c3ebc153503cac0693268b424.jpg"
            alt="Palace Background" 
            className="absolute inset-0 w-full h-full object-cover object-top mix-blend-overlay opacity-40"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              커플 궁전 프로필 테스트
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 mb-6">
              연애, 결혼 가치관을 분석하고 커플궁전에 나가보세요!
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              재미있는 퀴즈로 당신만의 개성이 담긴 커플 궁전 프로필을 만들어 드려요
            </p>
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-navy-900 px-8 py-4 rounded-button text-lg font-bold cursor-pointer whitespace-nowrap shadow-lg transform transition-transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => console.log('Start test clicked')} // Add navigation functionality when ready
            >
              {isHovered ? '지금 시작하기 →' : '테스트 시작하기'}
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
              <img 
                src="https://public.readdy.ai/ai/img_res/5ebf2c1fa01e65fd3798afc361859a98.jpg"
                alt="Profile Example" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 p-4 text-center">
                <h3 className="text-white text-2xl font-bold">김현범</h3>
                <p className="text-yellow-300">직진하다 과속 딱지 끊긴 경찰관</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 text-yellow-400 opacity-30">
          <i className="fas fa-star text-3xl"></i>
        </div>
        <div className="absolute bottom-10 left-10 text-yellow-400 opacity-30">
          <i className="fas fa-star text-3xl"></i>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
            <i className="fas fa-thumbtack text-yellow-500 mr-2"></i> 
            프로젝트 주요 기능
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-question-circle text-yellow-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                <span className="text-yellow-500">✅</span> 퀴즈 진행
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>사용자가 <strong>한 페이지당 하나의 질문</strong>을 풀며 진행</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>진행도 표시 (Progress Bar)</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>모든 질문을 완료하면 <strong>사용자 정보 입력 페이지로 이동</strong></span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-user-edit text-yellow-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                <span className="text-yellow-500">✅</span> 사용자 입력
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>사용자가 <strong>이름, 직업, 프로필 사진</strong> 입력</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>입력 완료 후 <strong>서버로 데이터를 한 번에 전송</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>개인 정보 보호를 위한 안전한 데이터 처리</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-chart-pie text-yellow-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                <span className="text-yellow-500">✅</span> 결과 페이지
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>서버에서 닉네임 및 성향 분석 결과를 반환</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>결과 화면 렌더링 & 공유 기능 제공</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>SNS에 결과 공유 가능</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Preview Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            이런 프로필을 받아보세요
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/3 bg-navy-800 rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src="https://public.readdy.ai/ai/img_res/5a726344fbd8c102f24ed7971ab1a70d.jpg"
                  alt="Result Example 1" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-2xl font-bold">김지은</h3>
                  <p className="text-yellow-300">열정 가득한 마케팅 전문가</p>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-sm text-gray-400">결혼 가치관</p>
                  <p className="font-medium">경제적 독립을 중시</p>
                </div>
                <div className="mb-3">
                  <p className="text-sm text-gray-400">도심에서 살고 싶음</p>
                  <p className="font-medium">1~2명 아이 의향</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">MBTI</p>
                  <p className="font-bold text-yellow-400">ENFJ</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-navy-800 rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src="https://public.readdy.ai/ai/img_res/cdf61a71bddddfa8a42d43a0e8168967.jpg"
                  alt="Result Example 2" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-2xl font-bold">박준호</h3>
                  <p className="text-yellow-300">꿈을 쫓는 스타트업 CEO</p>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-sm text-gray-400">결혼 가치관</p>
                  <p className="font-medium">가족 중심의 가치관</p>
                </div>
                <div className="mb-3">
                  <p className="text-sm text-gray-400">교외에서 살고 싶음</p>
                  <p className="font-medium">2~3명 아이 의향</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">MBTI</p>
                  <p className="font-bold text-yellow-400">ENTJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            지금 바로 나만의 프로필 만들기
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            간단한 퀴즈를 통해 당신의 연애와 결혼 가치관을 분석하고, 
            특별한 커플 궁전 프로필을 받아보세요. 이미 <span className="font-bold text-yellow-500">10,000+</span>명이 참여했습니다!
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-navy-900 px-10 py-4 rounded-button text-xl font-bold cursor-pointer whitespace-nowrap shadow-lg transform transition-transform hover:scale-105">
            테스트 시작하기
          </button>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-900">10,000+</p>
              <p className="text-gray-600">참여자</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-900">4,500+</p>
              <p className="text-gray-600">공유</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-navy-900">4.8/5</p>
              <p className="text-gray-600">만족도</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-navy-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold text-yellow-400">커플궁전</p>
              <p className="text-sm text-gray-400">© 2025 커플궁전 프로필 테스트. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <p className="text-sm text-gray-400">
              본 테스트는 재미를 위한 것이며, 전문적인 심리 분석이 아닙니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

