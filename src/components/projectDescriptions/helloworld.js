import React from 'react';
import helloworld_poster from '../../images/helloworld-poster.png';
import helloworld_RAG1 from '../../images/helloworld-RAG1.png';
import helloworld_RAG2 from '../../images/helloworld-RAG2.png';
import helloworld_RAG3 from '../../images/helloworld-RAG3.png';
import helloworld_chatbot3 from '../../images/helloworld-chatbot3.png';



const HelloWorldDescription = () => {
  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">개요</h2>
        <p>팀원: 7명 (FrontEnd 2, BackEnd 2, AI 2, PM 1, Design 1)</p>
        <p>역할: AI 서비스 개발</p>
        <p>수상: 2024년 서울시 새싹 해커톤 장려상(7위)</p>
        <p>내용: 외국인 근로자를 위한 통합 어플리케이션 개발 (11월 앱스토어 출시예정)</p>
      </div>

      <img src={helloworld_poster} alt="Data processing" className="w-4/5 mx-auto mb-4" />

      <hr className="my-6 border-gray-600" />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">수행 역할</h2>

        <div>
          <h3 className="text-lg font-semibold mb-2">1. 기획 및 홍보</h3>

          <p>
            <h3 className="text-m font-semibold mb-2">1-1. 서비스 기획</h3>
            {/* <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" />   */}
            <p> 저출산으로 인해 정부는 E-9 비자 발급 수를 늘리며 외국인 근로자 도입을 적극적으로 확대.
            이러한 배경에서, 늘어나는 외국인 근로자 수요에 발 맞춰 기존에 접근성이 어려운 정보를 전달하는 챗봇 서비스,
            또 외국인 근로자들이 구직 시 도움이 될만한 채용 정보 제공과 AI 이력서 생성 서비스를 기획</p>
            <br></br>
          </p>
          
          <p>
          <h3 className="text-m font-semibold mb-2">1-2. 웹사이트 제작</h3>
            {/* <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" /> */}
            <p className="mb-3">
              개발 초기 프론트엔드 인력이 바빠, 간단히 Github Page를 활용해 직접홍보 웹사이트 제작 및 배포
            </p>
            <a 
              href="https://bamboostreet.github.io/HelloWorld_website/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              aria-label="홍보 웹사이트 링크"
            >
              웹사이트 바로가기
            </a>
          </p>


        </div>
        
        <hr className="my-6 border-gray-600" />


        <div>
          <h3 className="text-lg font-semibold mb-2">2. RAG 데이터베이스 구축</h3>

          <p className="mb-4">
          <img src={helloworld_RAG1} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
          법률, 비자, 상담사례를 다루는만큼 신뢰성있는 답변을 위해 RAG(Retrieval-Augmented Generation)방식 활용
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">2-1. 데이터 수집, chunking</h3>
            <img src={helloworld_RAG2} alt="Data processing" className="w-4/5 mx-auto mb-4" />  
            <p>홈페이지 크롤링, 공개 데이터(AI-hub, Github)를 활용해 데이터 수집, 문서를 512토큰 단위로 chunking하고, overlaping 기법을 활용해 문맥 손실 최소화</p>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">2-2. vector search DB선정</h3>
            <img src={helloworld_RAG3} alt="Data processing" className="w-3/5 mx-auto mb-4" />  
            <p> ElasticSearch vectorDB 활용해 초기 데이터베이스 구축, 현재 MongoDB로 전환해 운용 중</p>
            <br></br>
          </p>
        </div>

        <hr className="my-6 border-gray-600" />

        <div>
          <h3 className="text-lg font-semibold mb-2">3. 콜봇 구현</h3>
          <p className="mb-4">
          <p> twillio api 활용해 구현, 현재 한국의 국제전화 요금 이슈 때문에 개발 보류 상태</p>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">3-1. Twillio</h3>
            {/* <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" />   */}
            
            <div className="video-container" style={{maxWidth: '480px', margin: '0 auto', marginBottom: '1rem'}}>
              <div className="relative" style={{paddingTop: '56.25%'}}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/3fRsnbHizXg" 
                  title="HelloWorld 프로젝트 데모 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <a 
              href="https://bamboostreet.github.io/posts/twillio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              aria-label="Twillio 활용 상세 내용 보기"
            >
              관련 개인 블로그 정리
            </a>
            <br></br>
          </p>
        </div>

        <hr className="my-6 border-gray-600" />

        <div>
          <h3 className="text-lg font-semibold mb-2">4. 챗봇 구현</h3>
          <p className="mb-4">
            
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">4-1. API 기반 프로토타입</h3>
            {/* <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" />   */}
            <p className="text-gray-300">
              GPT-3.5-turbo API를 활용하여 초기 프로토타입을 구현했습니다.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>RAG(Retrieval-Augmented Generation) 기술 적용으로 정확성 향상</li>
              <li>멀티 턴 대화 지원으로 자연스러운 대화 흐름 구현</li>
              <li>프롬프트 엔지니어링을 통한 응답 품질 최적화</li>
            </ul>     
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">4-2. 자체 호스팅 모델 실험</h3>
            {/* <img src={sejongmateData1} alt="Data processing" className="w-4/5 mx-auto mb-4" />   */}
            <p className="text-gray-300">
              사용자 수 증가에 따른 API 사용에 따른 비용 증가를 고려하여, LLaMA와 같은 오픈소스 모델을 직접 서빙하는 방식으로 전환을 검토했습니다.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>LLaMA-3 기반의 한국어 특화 모델을 선정하여 추론 성능 실험 진행</li>
              <li>다양한 모델 크기에 대한 추론 성능 및 리소스 사용량 비교 분석, llama-3-Korean-Bllossom-8B모델 최종 결정</li>
            </ul>
            <br></br>
          </p>

          <p>
            <h3 className="text-m font-semibold mb-2">4-3. sLLM 최적화 실험</h3>
            <img src={helloworld_chatbot3} alt="Data processing" className="w-3/5 mx-auto mb-4" />
            <ul className="list-disc list-inside mt-2 text-gray-300">  
            <li> 최종 선정된 llama-3 blossom 8b 모델, 클라우드 환경에서 배포를 위해 성능과 하드웨어 최적화 실험 진행</li>
            <li> 원본모델(llama-3-Korean-Bllossom-8B)의 양자화, vLLM 적용 여부에 따른 하드웨어 사용량과 추론 성능 비교</li>
            </ul>
            <br></br>

            <a 
              href="https://bamboostreet.github.io/posts/Helloworld_vllm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-060 text-white font-bold py-2 px-4 rounded transition duration-300"
              aria-label="양자화_vllm"양자화
            >
              관련 개인 블로그 정리
            </a>
          </p>
        </div>


        <hr className="my-6 border-gray-600" />
        

        <div>
          <h3 className="text-lg font-semibold mb-2">5. 배포 프로세스</h3>
          
          <p className="text-gray-300 mb-6">
            초기에는 ThetaCloud를 사용하여 배포를 진행했으나, 확장성과 관리 용이성을 고려하여 Azure 플랫폼으로 마이그레이션을 수행.
            이 과정에서 Azure 서비스를 활용하여 시스템의 안정성과 성능을 최적화.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-m font-semibold mb-2">5-1. ThetaCloud 초기 배포</h3>
              <p className="text-gray-300">
                ThetaCloud를 사용한 초기 배포 단계:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Docker 컨테이너를 활용한 애플리케이션 패키징</li>
                <li>ThetaCloud의 저렴한 GPU 비용</li>
                <li>자동화된 배포 프로세스</li>
                <li>초기 성능 모니터링 및 로깅 시스템 구축</li>
              </ul>
            </div>

            <div>
              <h3 className="text-m font-semibold mb-2">5-2. Azure Container Instances (ACI) 마이그레이션</h3>  
              <p className="text-gray-300">
                ThetaCloud의 갑작스런 gpu 사용 불가 이슈에 대처해 Azure Cloud로의 전환 결정.
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>서버리스 컨테이너 실행으로 인프라 관리 간소화</li>
                <li>Azure 네트워크, 보안, 모니터링 서비스 활용</li>
              </ul>
            </div>

            <div>
              <h3 className="text-m font-semibold mb-2">5-3. Azure Functions로의 임시 마이그레이션</h3>  
              <p className="text-gray-300">
                ACI의 변동 IP로 인한 백앤드 연동의 불안정성 이슈 발생, 이에 대처해 Azure Functions를 활용한 서버리스 아키텍처로 임시 마이그레이션을 수행.
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>사용량에 다른 요금 청구로 비용 절감</li>
                <li>auto-scaling을 통한 비용 효율적 리소스 관리</li>
                <br></br>
                현재 프로토타입 단계에서는 비용 효율성과 쉬운 관리를 위해 Azure Functions를 사용하고 있습니다. 향후 서비스 정식 출시 및 사용자 증가에 따라, 성능과 비용을 고려하여 
                자체 서버 구축 또는 다른 클라우드 서비스로의 전환을 검토할 예정입니다.
              </ul>
              
            </div>
          </div>

          <br></br>
          <a 
              href="https://bamboostreet.github.io/posts/ACI_Function_migration/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              aria-label="azure"
            >
              관련 개인 블로그 정리
            </a>
        </div>

        <hr className="my-6 border-gray-600" />
       
      </div>
      
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Python</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">RAG</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">GPT API</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Azure</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Flask</span>
      </div>
    </div>
  );
};

export default HelloWorldDescription;