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
// import sejongmateDeploy2 from '../../images/sejongmate-deploy2.png';

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
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">1. 데이터 수집, 검증</h3>
            <p className="mb-10 text-gray-200 leading-relaxed">
              데이터 수집 단계에서, 사용자 중심의 데이터 수집 전략의 중요성을 인지하고, 체계적인 접근 방식을 채택했습니다.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">1-1. 키워드 선정</h3>
            <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <li> 교내 학사요람을 참고해, '전과','공학인증','출결' 등 핵심 키워드를 선정했습니다.</li>
          </div>

          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">1-2. QA 데이터셋 생성 및 검증</h3>
            <img src={sejongmateData2} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
            <li> 질문 데이터셋 구축을 위해 기존 수집된 학교 문서를 기반으로 GPT-api를 활용해 질문을 생성하도록 했습니다.</li>
            <li> 추가적으로, 실제 유저가 할법한 질문을 수집하기 위해, 대학 커뮤니티 플랫폼 '에브리타임'에서 질문을 수집했습니다. 
              구체적으로 설명하자면, 키워드를 기준으로 검색한 뒤, 물음표로 끝나는 게시글 제목을 수집하는 방식을 사용했습니다.</li>
            <li> 수집된 질문들과 관련 교내 문서를 하나의 input으로 만들고, GPT 프롬프팅을 통해 질문에 대한 답변을 생성하도록 했습니다.
               이 방법으로 약 10,000개의 QA데이터 생성했습니다.</li>
            <li> 한달의 기간동안 직접 교내 문서를 참고하며 생성한 QA데이터의 신뢰성을 검증했습니다.</li>
          </div>  

          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">1-3. 데이터 증강(설문조사)</h3>
            <img src={sejongmateData3} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
            <li> 유저 중심의 데이터셋을 추가하기 위해 재학생 및 졸업생들을 대상으로 설문조사를 실시했습니다. 이후 유저 피드백을 반영한 '학교 근처 맛집', '학식 메뉴 추천' 등의 일상대화 QA데이터를 추가했습니다.</li>
          </div>

          
          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">1-4. 데이터 증강(증강기법 활용)</h3>
            <img src={sejongmateData4} alt="Data processing" className="w-2/5 mx-auto mb-4" />  
            <li> 데이터 증강을 위해 "질문 포맷 지정", "유사어/준말 어휘 증강", "문장 내 단어 랜덤 스왑" 기법들을 활용했고, 약 10,000개에서 약 40,000개로 데이터를 증강했습니다.</li>
            <br></br>
          </div>
          
        </div>


        <hr className="my-6 border-gray-600" />
        
        <div>
          <h3 className="text-lg font-semibold mb-4">2. 모델 선정, 핵심 로직 구현</h3>
          <p className="mb-10 text-gray-200 leading-relaxed">
            사용 가능한 자원과 비용을 고려해 모델을 선정하고, 답변 반환 로직을 구축했습니다.
          </p>
          
          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">2-1. 유사도 계산 모델</h3>
            <img src={sejongmateModel1} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
            <li> SBERT model을 KLUE-NLI, KorSTS 데이터셋으로 파인튜닝한, 한국어 특화 KR-SBERT 모델을 사용해 유저 쿼리와 데이터셋(질문)과의 임베딩 벡터를 계산했습니다.</li>
          </div>

          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">2-2. 생성 모델 선정 및 Fine-tuning</h3>
            <img src={sejongmateModel2} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
            <li>당시 한국어 기반 생성 모델 중 사용가능한 GPU 사양(A100)을 고려해 KoGPT 모델을 활용했습니다.</li>
            <li>앞서 구축한 QA데이터셋과 LoRA 기법을 활용해 Parameter-Efficient한 Fine-Tuning을 진행했습니다.</li>
            <li>하지만 KoGPT 모델을 활용한 성능 테스트에서 몇 가지 이슈가 있었는데, 주요 이슈로는 "모든 졸업학점을 130학점으로 출력"하는 수치 오류와, "세부 항목에서 잘못된 답변을 출력"하는 정보의 신뢰성 오류가 있었습니다.</li>
            <li>테스트 결과에 대한 의논을 거쳐, 생성 모델만 활용하는 것은 답변 신뢰도 측면에서 위험하다고 판단했고, 유사도에 기반한 Rule-base 기법과 조합해 아래 아키텍처로 최종 구현했습니다.</li>
          </div>

          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">2-3. 전체 아키텍처 구성</h3>
            <img src={sejongmateModel3} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
            <li> 최종 구현된 답변 반환 아키텍처는 입력된 유저 쿼리와 질문 데이터와의 유사도 0.75를 기준으로 답변 반환 로직이 변경됩니다.</li>
            <li> 0.75 이상은 학교 관련 질문으로 판단해 유사도 기반 Rull-base 답변을 제공합니다.</li>
            <li> 0.75 이하는 일상 대화로 판단해, 일상 대화와 QA데이터로 Fine-Tuning한 KoGPT로 처리됩니다.</li>
          </div>
        </div>
        
        <hr className="my-6 border-gray-600" />

        <div>
          <h3 className="text-lg font-semibold mb-2">3. 모델 배포</h3>
          <img src={sejongmateDeploy1} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
          <p className="mb-4 text-gray-200 leading-relaxed">
          </p>
          
          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">3-1. Flask 애플리케이션 구축</h3>
            {/* <img src={sejongmateDeploy1} alt="Data processing" className="w-3/5 mx-auto mb-4" />   */}
            <li> Python 기반의 경량 웹 프레임워크인 Flask를 사용하여 API를 구축했습니다.</li>
            <li> GET, POST 등의 HTTP 메서드에 대한 처리 로직을 구현했습니다.</li>
          </div>

          <div className="mb-10">
            <h3 className="text-m font-semibold mb-2">3-2. AWS EC2 인스턴스 배포</h3>
            {/* <img src={sejongmateDeploy2} alt="Data processing" className="w-3/5 mx-auto mb-4" />   */}
            <p>AWS EC2(Elastic Compute Cloud) 인스턴스를 활용하여 LLM(Large Language Model)을 배포하고, 이를 백엔드 서비스와 연동한 확장 가능한 클라우드 기반 애플리케이션 환경을 구축했습니다.</p>
          </div>

        </div>
        
        <hr className="my-6 border-gray-600" />

      </div>
      
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-500 text-white px-2 py-1 rounded">python</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">LLM</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">GPT</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">AWS</span>
        
      </div>
    </div>
  );
};

export default SejongmateDescription;