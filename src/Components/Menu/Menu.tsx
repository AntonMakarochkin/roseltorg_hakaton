import { useState } from "react";

import LineChartContainer from "../../Containers/LineChartContainer";
import BarChartContainer from "../../Containers/BarChartContainer";
import { addDays, addMinutes } from "date-fns";

import { getRandomValue } from "../../Utils/getRandomValue";
import { inNumberCheck } from "../../Utils/isNumberCheck";
import { getLastValue } from "../../Utils/getLastValue";
import { getRandomArray } from "../../Utils/getRandomArray";

import styles from "./Menu.module.css";

function Menu() {
  const [wood, setWood] = useState<Array<Array<number>>>([
    ...getRandomArray(700, 900),
  ]);

  const [plain, setPlain] = useState<Array<Array<number>>>([
    ...getRandomArray(300, 450),
  ]);

  const [checkBoxes, setCheckBoxes] = useState({
    wood: true,
    plain: true,
  });

  const [input, setInput] = useState(0);


  const [selectedArrs, setSelectedArrs] = useState(['wood', 'plain']);

  const averageCost = Number(`${selectedArrs.includes('wood') ? getLastValue(wood) : 0}`) + Number(`${selectedArrs.includes('plain') ? getLastValue(plain) : 0}`) + input;
  const minCost = averageCost / 2;
  const maxCost = averageCost * 1.5;
  console.log(averageCost);
  
  function refreshData() {
    wood.push([
      addMinutes(wood[wood.length - 1][0], 1).getTime(),
      getRandomValue(600, 700),
    ]);
    wood.shift();
    setWood([...wood]);

    plain.push([
      addMinutes(plain[plain.length - 1][0], 1).getTime(),
      getRandomValue(300, 400),
    ]);
    plain.shift();
    setPlain([...plain]);
  }

  function setSelectedResources(e: any, typee: string) {
    if (e === false) {
      setSelectedArrs(selectedArrs.filter((item) => item !== typee))
    }
    if (e === true) {
      setSelectedArrs([...selectedArrs, typee])
    }
  }
  function hideLine(type: string, event: any) {
    const chart = ApexCharts.getChartByID("wood");
    chart?.toggleSeries(type);
    setSelectedResources(event, type);
    setCheckBoxes({...checkBoxes, [type]: event})
  }

  return (
    <div id={styles.root}>
      <div className={styles.container}>
        <div className={styles.panel}>
          Добавленная стоимость за ед. товара:
          <input
            type="text"
            value={input}
            onChange={(e) => inNumberCheck(+e.target.value, setInput)}
          />
          [ руб. ]
        </div>
        <div className={styles.list_resourses}>
          <div>
            <input
              type="checkbox"
              onChange={(e) => hideLine("plain", e.target.checked)}
              checked={checkBoxes.plain}
            />
            Глина
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => hideLine("wood", e.target.checked)}
              checked={checkBoxes.wood}
            />
            Эмаль
          </div>
        </div>
        <div className={styles.line_chart}>
          <LineChartContainer wood={wood} plain={plain} />
        </div>
        <div className={styles.bar_chart}>
          <BarChartContainer data={[maxCost, averageCost, minCost]} />
        </div>
        <div className={styles.total}></div>
      </div>
      <button onClick={() => refreshData()}>Обновить</button>
    </div>
  );
}

export default Menu;
