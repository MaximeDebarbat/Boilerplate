
import Modal from "@/components/action/modal";


const Home = () => {

  return (
    <div className="flex justify-center p-16">
      <div className="flex flex-col gap-4">
        
        <button className="btn">Button</button>
        
        <button className="btn btn-neutral">Neutral</button>
        
        <button className="btn btn-primary">Primary</button>
        
        <button className="btn btn-secondary">Secondary</button>
        
        <button className="btn btn-accent">Accent</button>
        
        <button className="btn btn-ghost">Ghost</button>
        
        <button className="btn btn-link">Link</button>
        
        <details className="dropdown">
          <summary className="btn m-1">Dropdown</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
        
        <Modal
          title="Modal"
        >
          <p>pipi caca</p>
        </Modal>

        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;