import { useEffect, useState } from "react";
import "./App.css";

function Home2() {
  const [number, setNumber] = useState(0);
  const [nine, setNine] = useState();
  const [ten, setTen] = useState();
  const [eleven, setEleven] = useState();
  const [Twelve, setTwelve] = useState();
  const [thirteen, setThirteen] = useState();
  const [forteen, setForteen] = useState();
  const [fifteen, setFifteen] = useState();
  const [sixteen, setSixteen] = useState();
  const [seventeen, setSeventeen] = useState();
  const [eighteen, setEighteen] = useState();
  const [nineteen, setNineteen] = useState();
  const [twenty, setTwenty] = useState();
  const [twentyone, setTwentyone] = useState();
  const [twentytwo, setTwentytwo] = useState();
  const [twentythree, setTwentythree] = useState();

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour === 9) {
      setNine(number);
    } else if (currentHour === 10) {
      setTen(number);
    } else if (currentHour === 11) {
      setEleven(number);
    } else if (currentHour === 12) {
      setTwelve(number);
    } else if (currentHour === 13) {
      setThirteen(number);
    } else if (currentHour === 14) {
      setForteen(number);
    } else if (currentHour === 15) {
      setFifteen(number);
    } else if (currentHour === 16) {
      setSixteen(number);
    } else if (currentHour === 17) {
      setSeventeen(number);
    } else if (currentHour === 18) {
      setEighteen(number);
    } else if (currentHour === 19) {
      setNineteen(number);
    } else if (currentHour === 20) {
      setTwenty(number);
    } else if (currentHour === 21) {
      setTwentyone(number);
    } else if (currentHour === 22) {
      setTwentytwo(number);
    } else if (currentHour === 23) {
      setTwentythree(number);
    }

    const interval = setInterval(() => {
      setNumber(Math.floor(Math.random() * 10000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <div className="real-data">
        <h2>{number}</h2>
      </div>
      <table>
        <tr>
          <th>Time</th>
          <th>price</th>
        </tr>
        <tr>
          <td>9:00</td>
          <td>{nine}</td>
        </tr>
        <tr>
          <td>10:00</td>
          <td>{ten}</td>
        </tr>
        <tr>
          <td>11:00</td>
          <td>{eleven}</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>{Twelve}</td>
        </tr>
        <tr>
          <td>13:00</td>
          <td>{thirteen}</td>
        </tr>
        <tr>
          <td>14:00</td>
          <td>{forteen}</td>
        </tr>
        <tr>
          <td>15:00</td>
          <td>{fifteen}</td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>{sixteen}</td>
        </tr>
        <tr>
          <td>17:00</td>
          <td>{seventeen}</td>
        </tr>
        <tr>
          <td>18:00</td>
          <td>{eighteen}</td>
        </tr>
        <tr>
          <td>19:00</td>
          <td>{nineteen}</td>
        </tr>
        <tr>
          <td>20:00</td>
          <td>{twenty}</td>
        </tr>
        <tr>
          <td>21:00</td>
          <td>{twentyone}</td>
        </tr>
        <tr>
          <td>22:00</td>
          <td>{twentytwo}</td>
        </tr>
        <tr>
          <td>23:00</td>
          <td>{twentythree}</td>
        </tr>
      </table>
    </div>
  );
}

export default Home2;
