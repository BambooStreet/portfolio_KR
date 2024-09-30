import React from 'react';

const SejongMateDescription = () => (
  <div>
    <p>SejongMate는 세종대학교 학생들을 위한 종합 정보 애플리케이션입니다. 이 프로젝트를 통해 모바일 앱 개발과 서버 관리 스킬을 크게 향상시켰습니다.</p>
    <h3 className="text-xl font-bold mt-4 mb-2">주요 기능</h3>
    <ul className="list-disc list-inside">
      <li>실시간 학교 공지사항 알림</li>
      <li>학식 메뉴 및 잔여 식권 확인</li>
      <li>셔틀버스 실시간 위치 및 도착 정보</li>
      <li>강의실 및 스터디룸 예약 시스템</li>
    </ul>
    <h3 className="text-xl font-bold mt-4 mb-2">사용 기술</h3>
    <ul className="list-disc list-inside">
      <li>React Native for cross-platform development</li>
      <li>Firebase for real-time database and authentication</li>
      <li>Node.js and Express for backend API</li>
      <li>WebSocket for real-time updates</li>
    </ul>
    <h3 className="text-xl font-bold mt-4 mb-2">성과</h3>
    <ul className="list-disc list-inside">
      <li>Google Play Store에서 1,000+ 다운로드 달성</li>
      <li>학생회로부터 공식 인정 및 지원 받음</li>
      <li>교내 해커톤에서 최우수상 수상</li>
    </ul>
  </div>
);

export default SejongMateDescription;