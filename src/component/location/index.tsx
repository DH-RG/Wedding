import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 3호선 <b>남부터미널역 4번출구</b> 나와서
            <br />
            도보로 2분(150m) 이동 후 좌측 건물입니다.
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선(파랑): 461, 641
            <br />
            - 지선(초록): 3420, 4319
            <br />
            - 마을버스: 서초 11번
            <br />
            - 직행(빨강): 8501, 8114
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>서초구 서초중앙로2길 10</b> 검색
            <br />
            - 주차 요금은 2시간 무료입니다.
            <br />
            (전용 주차타워로 식장까지 도보 2분)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
