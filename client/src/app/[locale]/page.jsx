
"use client";

import { useUI } from '@/context/UIContext';
import GoogleButton from '@/components/authentication/googleButton';
import { AiFillDollarCircle } from "react-icons/ai";
import TextInput from '@/components/inputs/text';
import TextArea from '@/components/inputs/textArea';
import Select from '@/components/inputs/select';


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
        
        <div className="divider">Dropdown</div>

        <details className="dropdown text-black">
          <summary className="btn m-1">Dropdown</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>

        <div className="divider">Modals</div>
        
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

        <div className="divider">Alert</div>

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

        <div className="divider">Authentication</div>

        <GoogleButton />

        <div className="divider">Collapsible</div>

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
      
        <div className="divider">Inputs</div>

        <TextInput placeholder="Simple input text"/>
        <TextInput placeholder="Simple input text with right element" elementRight="Name"/>
        <TextInput placeholder="Simple input text with left icon" elementLeft={
          <AiFillDollarCircle />
        }
        />
        <TextInput label="Super label" placeholder="Simple labelled input text"/>
        <TextInput label="Error" placeholder="Simple error input text" error={true}/>
        <TextInput label="Error with info" placeholder="Simple error input text with info" error={true} infoMessage="That's why"/>
      
        <TextArea placeholder="Simple text area"/>
      
        <Select label="Select label" placeholder="Simple select" defaultValue="Sample Select">
          <option disabled value="Sample Select">Sample Select</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>

        <div className="divider">Email</div>

        <button className="btn"
          onClick={() => {

          }}
        >Send</button>

      </div>
    </div>
  );
}

export default Home;