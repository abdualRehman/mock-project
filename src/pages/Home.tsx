import Wrapper from "@/components/wrapper";
import { useState } from "react";
import Slideover from "@/components/slideover";
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="h2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia nobis sed impedit odio quidem eum quos animi. Similique facilis quae libero alias minus? Illum quo ducimus corporis repellendus? Eligendi.</h1>
      <button onClick={() => setOpen(true)} >Click</button>
      <Slideover open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
