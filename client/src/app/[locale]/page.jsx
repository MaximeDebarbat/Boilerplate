
"use client";

import { useUI } from '@/context/UIContext';
import GoogleButton from '@/components/authentication/googleButton';

const Home = () => {

  const { showModal, showAlert, showPersistentAlert } = useUI();

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
        
        <details className="dropdown text-black">
          <summary className="btn m-1">Dropdown</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
        
        <button 
          className="btn"
          onClick={() => showModal('Modal 1 Title', (
            <>
              <p>Modal 1 Content</p>
            </>
        
        ))}
        >
          Display Modal 1
        </button>

        <button 
          className="btn"
          onClick={() => showModal('Modal 2 Title', (
            <>
              <p>Modal 2 Content</p>
            </>
        
        ))}
        >
          Display Modal 2
        </button>

        <button
          className="btn"
          onClick={() => showAlert('info', 'Info Alert', null, null, 5000)}
        >
          Display Normal Info 5s
        </button>

        <button
          className="btn"
          onClick={() => showAlert('success', 'Success Alert', 'This is a success alert', null, 5000)}
        >
          Display Success Alert 5s
        </button>

        <button
          className="btn"
          onClick={() => showAlert('warning', 'Warning', 'This is a warning alert', (
            <button className="btn btn-sm">Action</button>
          ), 2000)}
        >
          Display Warning Alert 2s with right component
        </button>

        <button
          className="btn"
          onClick={() => showPersistentAlert('error', 'Error', 'This is a persistent error alert', (
            <button className="btn btn-sm">Action</button>
          ), 5000)}
        >
          Display Error persistent Alert with right component
        </button>

        <GoogleButton />


        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="checkbox" name="my-accordion-4" defaultChecked/>
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="checkbox" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="checkbox" name="my-accordion-4" />
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