import { WorkCard } from "@/features/work/components";
import style from "./style.module.scss";

const WorksPage = () => {
  return (
    <div className={style.worksContainer}>
      <h1 className={style.title}>W<span>O</span>RK<span>S</span></h1>
      <div className={style.workCardContainer}>
        <WorkCard title={"hubme"} image={"/works/hubme.png"} />
        <WorkCard title={"snow-fall"} image={"/works/snow-fall.png"} />
      </div>
    </div>
  );
};

export default WorksPage;
