import React from 'react';
import ETRI_task from '../../images/ERTI-task1.png';

const ETRIExperience = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">과제: 전문가 의사결정 지원 인공지능 기술 개발</h2>
        <p>직책: 연구연수생</p>
      </div>
      <img src={ETRI_task} alt="Data processing" className="w-4/5 mx-auto mb-4" />       

      <hr className="my-6 border-gray-600" />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">주요 업무</h2>
        
        <h3 className="text-lg font-semibold mb-2">1. GPT 프롬프팅을 통한 LLM 학습 데이터 구축</h3>
        <p className="mb-4">
          한국어 Wikipedia 문서와 gpt-turbo-3.5를 활용해 데이터셋을 구축했습니다. 
          이 데이터셋은 전문가의 의사결정을 보조하는 LLM의 fine-tuning에 활용될 예정이었습니다.
          <ul className="list-disc list-inside mt-2">
            <li>Wikipedia 문서를 참고한 GPT가 질문을 생성</li>
            <li>질문의 참/거짓 진위 여부를 답변하는 형식의 데이터 생성</li>
            <li>약 5만개의 데이터를 구축</li>
          </ul>
        </p>

        <h3 className="text-lg font-semibold mb-2">2. 생성된 데이터 검증</h3>
        <p className="mb-4">
          GPT를 통해 생성된 데이터의 질문, 답변에서 오류를 검출하는 과제를 수행했습니다.
          <ul className="list-disc list-inside mt-2">
            <li>위키피디아 문서를 참고해 검증을 진행</li>
            <li>동일한 오류가 반복되는 것을 확인하고 오류 패턴을 정리</li>
            <li>효율적인 검증 프로세스를 개발</li>
            <li>다른 인턴의 업무에도 적용해 부서 전체의 검증 업무 속도를 개선</li>
            <li>인턴 기간 동안 약 2만개의 데이터를 검증</li>
          </ul>
        </p>

        <h3 className="text-lg font-semibold mb-2">성과</h3>
        <p className="mb-4">
          이러한 노력의 결과로 인턴 평가의 모든 항목에서 "A(아주좋음)"를 받았습니다.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-500 text-white px-2 py-1 rounded">GPT</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">LLM</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">데이터 구축</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">데이터 검증</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">프로세스 개선</span>
      </div>
    </div>
  );
};

export default ETRIExperience;