import React from 'react';
import sejongmatePoster from '../../images/sejongmate-poster.png';
import sejongmateData1 from '../../images/sejongmate-data1.png';
import sejongmateData2 from '../../images/sejongmate-data2.png';
import sejongmateData3 from '../../images/sejongmate-data3.png';
import sejongmateData4 from '../../images/sejongmate-data4.png';
import sejongmateModel1 from '../../images/sejongmate-model1.png';
import sejongmateModel2 from '../../images/sejongmate-model2.png';
import sejongmateModel3 from '../../images/sejongmate-model3.png';
import sejongmateDeploy1 from '../../images/sejongmate-deploy1.png';
import sejongmateDeploy2 from '../../images/sejongmate-deploy2.png';

const SejongmateDescription = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">개요</h2>
        <p>팀원: 5명 (FrontEnd 1, BackEnd 2, AI 2) </p>
        <p>역할: AI개발</p>
        <p>수상: 2023년 교내 소프트웨어 창의설계 경진대회 우수상(2위)</p>
        <p>내용: SejongMate는 GPT-api를 활용해 구축한 QA데이터셋과 LLM을 활용한 세종대학교의 챗봇으로, 학생들의 다양한 질문에 답변을 제공합니다.</p>
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
        
        <div>
          <h3 className="text-lg font-semibold mb-2">1. 데이터 수집, 검증</h3>
          <p className="mb-4 text-gray-300 leading-relaxed">
            데이터 수집 단계에서, 사용자 중심의 데이터 수집 전략의 중요성을 인지하고, 체계적인 접근 방식을 채택했습니다.
          </p>
          
          <p>
            <h3 className="text-m font-semibold mb-2">1-1. 키워드 선정</h3>
            <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <p> 교내 학사요람을 참고해, '전과','공학인증','출결' 등 핵심 키워드 선정</p>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">1-2. QA 데이터셋 생성</h3>
            <img src={sejongmateData2} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <li> 대학 커뮤니티 플랫폼 '에브리타임'에서 앞서 추출한 키워드별 질문 수집</li>
            <li> 수집된 질문 + chunking한 교내 문서를 input으로, GPT-turbo-3.5를 활용해 Answer생성 약 10,000개의 QA데이터 생성</li>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">1-3. 신뢰성 검증</h3>
            {/* <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" />   */}
            <p> 한달여의 기간동안 사람이 직접 데이터 신뢰성 검증</p>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">1-4. 데이터 증강(설문조사)</h3>
            <img src={sejongmateData3} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <p> 재학생 및 졸업생들을 대상으로 설문조사, 유저 피드백 반영한 QA데이터 추가</p>
            <br></br>
          </p>

          
          <p>
            <h3 className="text-m font-semibold mb-2">1-5. 데이터 증강(자연어처리)</h3>
            <img src={sejongmateData4} alt="Data processing" className="w-2/5 mx-auto mb-4" />  
            <p> 질문 포맷 지정, 유사어/준말 어휘 증강, 문장 내 단어 랜덤 스왑으로 데이터 증강</p>
            <br></br>
          </p>
          
        </div>


        <hr className="my-6 border-gray-600" />
        
        <div>
          <h3 className="text-lg font-semibold mb-2">2. 모델 선정, 핵심 로직 구현</h3>
          <p className="mb-4 text-gray-300 leading-relaxed">
            사용 가능한 자원과 비용을 고려해 모델을 선정하고, 답변 반환 로직을 구축했습니다.
          </p>
          
          <p>
            <h3 className="text-m font-semibold mb-2">2-1. 모델 선정(유사도 계산)</h3>
            <img src={sejongmateModel1} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <p> SBERT model을 KLUE-NLI, KorSTS 데이터셋으로 파인튜닝한 KR-SBERT 모델을 사용하여, 유저 쿼리와 세종대학교 데이터셋(질문)과의 임베딩 벡터 계산</p>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">2-2. 모델 선정(생성 모델)</h3>
            <img src={sejongmateModel2} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <p>당시 한국어 기반 생성 모델 중 적절한 비용 안에서 활용 가능했던 KoGPT 활용,</p>
            <p>하지만 성능 이슈가 존재(수치 오류: 모든 졸업학점을 130학점으로 출력, 정보 오류: 세부 항목에서 잘못된 답변 출력)</p>
            <p>생성 모델만 활용하는 것은 답변 신뢰도 측면에서 위험하다고 판단, Rule-base와 조합해 아래 아키텍처로 구현</p>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">2-3. 전체 아키텍처 구성</h3>
            <img src={sejongmateModel3} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <p> 입력된 쿼리와 계산된 데이터와의 유사도 0.75를 기준으로</p>
            <p> 0.75 이상은 학교 관련 질문으로 판단해 유사도 기반 룰베이스 답변 제공</p>
            <p> 0.75 이하는 일상 대화로 판단, 일상 대화가 학습된 KoGPT로 처리</p>
            <br></br>
          </p>

        </div>
        
        <hr className="my-6 border-gray-600" />

        <div>
          <h3 className="text-lg font-semibold mb-2">3. 모델 배포</h3>
          <p className="mb-4 text-gray-300 leading-relaxed">
            사용 가능한 자원 고려해 모델 배포
          </p>
          
          <p>
            <h3 className="text-m font-semibold mb-2">3-1. Flask 애플리케이션 구축</h3>
            <img src={sejongmateDeploy1} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <p> Flask 활용</p>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">3-2. AWS EC2 인스턴스 배포</h3>
            <img src={sejongmateDeploy2} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <li> EC2 인스턴스 활용</li>
            <br></br>
          </p>

        </div>
        
        <hr className="my-6 border-gray-600" />

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