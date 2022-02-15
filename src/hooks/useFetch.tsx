import { useState, useEffect } from "react";

export default function useFetch(url: string) {
  // 매개변수로는 api 주소를 받는다.
  const [data, setData] = useState([]); // api에서 받아올 객체 이름을 data 라고 지정해놓았다.
  useEffect(() => {
    // useEffect로 화면 렌더링시 돌릴 로직을 안에 넣어두자.
    fetch(url) // fetch 함수로 url 을 받아서
      .then((res) => {
        // 통신성공해서 받은 데이터그룹 res를
        return res.json(); // json 형식으로 보기 편하게 변환하자.
      })
      .then((data) => {
        // 변환도 성공하면, json으로 받아온 데이터를 data 라고하고
        setData(data); // setData()를 통해 맨위에 data 값속에 요 데이터를 넣어주자.
      });
  }, [url]); // 단, url이 변경될 때만 useEffect 실행된다.
  return data; // setData()를 통해 받은 data를 리턴한다.
}
