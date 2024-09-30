import React from 'react';
import foreignAICC_poster from '../../images/foreignAICC-poster-1.png';

const HelloWorldDescription = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">개요</h2>
        <p>팀원: 대학생 팀</p>
        <p>내용: 외국인 근로자를 위한 통합 어플리케이션 개발</p>
        <p>역할: AI 개발</p>
      </div>

      <div className="mb-6">
        <div className="bg-gray-700 p-2 rounded-lg mb-4">
          {/* 프로젝트 관련 이미지나 로고를 넣을 수 있습니다 */}
          <img 
            src={foreignAICC_poster}
            alt="HelloWorld Project" 
            className="w-full h-48 object-contain mb-2"
          />
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">수행 역할</h2>
        
        <h3 className="text-lg font-semibold mb-2">1. 서비스 기획</h3>
        <p className="mb-4">
          기존 외국인 근로자들에게 접근성이 어려운 정보를 추리고, 이를 전달하는 챗봇, 콜봇을 기획했습니다. 
          외국인 근로자들이 구직 시 도움이 될만한 AI 이력서 요약 서비스를 기획했습니다.
        </p>

        <h3 className="text-lg font-semibold mb-2">2. 홍보 웹사이트 제작/배포</h3>
        <p className="mb-4">
          Github blog, jekyll을 활용해 프로젝트 시연 및 홍보 웹사이트를 제작했습니다.
          <br />
          웹사이트 주소: <a href="https://bamboostreet.github.io/HelloWorld_website/" className="text-blue-400 hover:underline">https://bamboostreet.github.io/HelloWorld_website/</a>
        </p>

        <h3 className="text-lg font-semibold mb-2">3. 모델 개발</h3>
        <p className="mb-4">
          <ul className="list-disc list-inside mt-2">
            <li>ElasticSearch DB와 GPT api를 활용해 챗봇의 RAG 응답 구현, 멀티 턴 대화(최대 3턴) 구현</li>
            <li>GPT 프롬프팅을 통한 간단한 이력서 생성 기능 개발</li>
            <li>Azure 클라우드를 통한 Flask app 배포</li>
          </ul>
        </p>

        <h3 className="text-lg font-semibold mb-2">4. 프로젝트 지원 관리</h3>
        <p className="mb-4">
          "사이트임펙트" 사회공헌 프로젝트에 참여하여 본선 진출을 위한 커뮤니티 홍보 활동을 진행했습니다.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Python</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">ElasticSearch</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">GPT API</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Azure</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Flask</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Github Pages</span>
      </div>
    </div>
  );
};

export default HelloWorldDescription;