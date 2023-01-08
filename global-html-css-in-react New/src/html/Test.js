import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
    <h3>
                <Link to="/">Home</Link>
            </h3>
      <div>
        <nav>
          <h3>
            <Link to="/">Home</Link>
          </h3>
        </nav>
        <h2>Text Formating Tags</h2>
        <p>
          {" "}
          This is a <b> sample </b> paragraph. Sample <i> italics </i> text.
          <b>
            {" "}
            <i> Both &nbsp; bold's & and italics. </i>{" "}
          </b>
          <strong>Strong text; = </strong>
        </p>

        <p>
          <span>
            a <sup> 2 </sup>a <sub> j </sub>
            <br />
            <q> Quoted Text </q>
          </span>
        </p>

        <h2>Special Character</h2>

        <p>
          This is a &nbsp; &nbsp; sample text. &lt; p &gt; tag is used for
          paragraph.
          <br />
          She&apos;s
        </p>

        <h2>Table</h2>
        <table border="2">
          <caption>Demo Table</caption>
          <tr>
            <td></td>
            <th colSpan="2">Column 1</th>
            <th>Column 2</th>
            {/* <th>Column 3</th> */}
          </tr>
          <tr>
            <th rowSpan="2">Row 1</th>
            <td>Cell 1 1</td>
            <td>Cell 1 2</td>
            <td>Cell 1 3</td>
          </tr>
          <tr>
            {/* <th>Row 2</th> */}
            <td>Cell 2 1</td>
            <td>Cell 2 2</td>
            <td>Cell 2 3</td>
          </tr>
          <tr>
            <th>Row 3</th>
            <td>Cell 3 1</td>
            <td>Cell 3 2</td>
            <td>Cell 3 3</td>
          </tr>
        </table>

        <h2>Forms</h2>

        <form action="" method="">
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              required
              name="username"
              value="akash"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" required name="password" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <br />
            <input type="number" id="number" required name="number" />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <br />
            <input type="date" id="Date" required name="date" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </div>
          <div>
            <label htmlFor="range">Range</label>
            <br />
            <input
              type="range"
              name="range"
              min="10"
              max="50"
              step="10"
              id="range"
              required
              disabled
            />
          </div>
          <div>
            <p>Gender</p>
            <input type="radio" name="gender" value="female" checked/>
            Female
            <br />
            <input type="radio" name="gender" value="male"/>
            Male
            <br />
            <input type="radio" name="gender" value="other"/>
            Other <br />
          </div>
           
           <div>Course Done</div>
           <input type="checkbox" name="course" value="c++" />C++ <br />
           <input type="checkbox" name="course" value="c++" />java <br />
           <input type="checkbox" name="course" value="c++" />python <br />
           
           
           <select name="month_seleted" multiple>
           <p>Month</p>
               <option>Jan</option>
               <option selected>Feb</option>
               <option>Mar</option>
               <option>Apr</option>
           </select>
            
            <p>Share your experience</p>
           <textarea name="experience" id="" cols="30" rows="10"></textarea>

          <div>
              {/* 3 types of type of button */}
            <input type="submit" />
            <button type="button">Button</button>
            <button type="reset">Reset</button>
          </div>
        </form>
        <h2>Media</h2>
        <audio src="" controls type="audio/mp3">
            <source src="static/audio.mp3"/>
        </audio>
        <br />
        <video height="200" width="200" controls>
            <source src="static/video.mp4"  type="video/mp4" />
        </video>

        


      </div>
    </>
  );
};

export default Test;
