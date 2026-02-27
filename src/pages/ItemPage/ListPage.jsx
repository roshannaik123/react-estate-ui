import "./ListPage.scss";
import Filter from "../../components/filter/Filter"
import { listData } from "../../components/lib/dummydata.jsx";
import Map from "../../components/map/map";
import Card from "../../components/Card/Card.jsx";

function ListPage() {
  const data = listData;

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={data}/>
    </div>
  </div>;
}

export default ListPage;