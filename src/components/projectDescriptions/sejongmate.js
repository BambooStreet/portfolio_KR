import React from 'react';
import sejongmatePoster from '../../images/sejongmate-poster.png';
import sejongmateData1 from '../../images/sejongmate-data-1.png';

const SejongmateDescription = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">개요</h2>
        <p>팀원: 5명</p>
        <p>수상: 2023년 교내 소프트웨어 창의설계 경진대회 우수상(2위)</p>
        <p>내용: SejongMate는 LLM, Rule-based 기법을 활용한 세종대학교의 챗봇으로, 학생들의 다양한 질문에 정확한 답변을 제공합니다.</p>
      </div>

      <div className="mb-6">
        <div className="bg-gray-700 p-2 rounded-lg mb-4">
          {/* PDF 대신 이미지를 사용 */}
          <img 
            src={sejongmatePoster}
            alt="SejongMate Poster" 
            className="w-full h-192 object-contain mb-2"
          />
        </div>
        
      </div>

      <hr className="my-6 border-gray-600" />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">수행 역할</h2>
        
        <h3 className="text-lg font-semibold mb-2">1. 데이터 수집, 전처리</h3>
        <img src={sejongmateData1} alt="Data processing" className="w-full mb-4" />
        <p className="mb-4">
          초기 데이터 수집 과정에서 사용자의 요구를 파악하고, 그에 맞는 키워드를 기반으로 데이터를 수집할 필요성을 느꼈습니다. 
          에브리타임의 최근 게시물에서 질문을 추출하고, 추가로 설문 조사를 통해 키워드를 도출했습니다.
          <br /><br />
          수집한 키워드를 바탕으로 내부 회의를 통해 필수적으로 포함되어야 할 키워드를 최종 결정하고, 
          이를 통해 대학 커뮤니티, 학사 규정에서 정보를 추출하여 데이터를 구축하고 확장했습니다.
        </p>

        <h3 className="text-lg font-semibold mb-2">2. Question-Answer 쌍 데이터 생성</h3>
        <p className="mb-4">
          챗봇의 주요 로직을 사용자 쿼리와 DB의 가장 유사한 질문 간의 유사도를 계산하고, 그에 적합한 답변을 출력하는 것으로 결정했습니다.
          이에 따라 Question-Answer 데이터를 생성해야 했고, 프로세스는 다음과 같았습니다.
          <ol className="list-decimal list-inside mt-2">
            <li>앞서 수집한 문서를 GPT input에 적합한 청크 단위로 분할</li>
            <li>GPT-turbo-3.5 api를 활용하여 앞서 수집된 문서에 대한 Question 생성</li>
            <li>생성된 Question + 문서를 입력으로 하여 신뢰성 있는 Answer 생성</li>
            <li>인간에 의한 최종 검증</li>
          </ol>
          각 프로세스에는 적절한 GPT 프롬프트를 직접 작성하여 효율을 높였습니다.
        </p>

        <h3 className="text-lg font-semibold mb-2">3. 모델 배포</h3>
        <p className="mb-4">
          챗봇의 주요 로직을 사용자 쿼리와 DB의 가장 유사한 질문 간의 유사도를 계산하고, 그에 적합한 답변을 출력하는 것으로 결정했습니다.
          이에 따라 Question-Answer 데이터를 생성해야 했고, 프로세스는 다음과 같았습니다.
          <ol className="list-decimal list-inside mt-2">
            <li>앞서 수집한 문서를 GPT input에 적합한 청크 단위로 분할</li>
            <li>GPT-turbo-3.5 api를 활용하여 앞서 수집된 문서에 대한 Question 생성</li>
            <li>생성된 Question + 문서를 입력으로 하여 신뢰성 있는 Answer 생성</li>
            <li>인간에 의한 최종 검증</li>
          </ol>
          각 프로세스에는 적절한 GPT 프롬프트를 직접 작성하여 효율을 높였습니다.
        </p>

        <h3 className="text-lg font-semibold mb-2">4. 설문조사를 통한 데이터 보강, 유저 경험 개선</h3>
        <p className="mb-4">
          실제 사용자는 예상했던 문장과는 다른 방식으로 질문하는 경우가 많았습니다. 
          예를 들어, 대학명을 줄이거나 과목명을 약어로 쓰는 방식이 있습니다. 
          우리는 이를 고려하여 임의로 유의어/약어에 관한 질문 데이터를 확장했습니다.
          <br /><br />
          또한, 한국어는 어순이 바뀌어도 의미가 유지되는 경우가 많습니다. 
          우리는 이를 고려하여 문장 내의 단어를 무작위로 바꾸어 데이터를 확장했습니다.
          <br /><br />
          최종적으로 확장된 데이터는 수집한 QA에 대해 약 4만 건입니다.
        
          <ol className="list-decimal list-inside mt-2">
            <li>GPT 프롬프트를 통해 질문 형식을 지정하고, 다양한 질문 유형을 생성</li>
            <li>유의어/약어 어휘에 관한 확장</li>
            <li>무작위 문장 순서 변환 및 삭제를 통한 추가 데이터 다양화</li>
          </ol>
        </p>
        
      </div>
      
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-500 text-white px-2 py-1 rounded">python</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">AWS</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">pythorch</span>
      </div>
    </div>
  );
};

export default SejongmateDescription;