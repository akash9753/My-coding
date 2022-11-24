import "../style/styles.css";
import { useEffect, useLayoutEffect, useState } from "react";
import Blockly from "blockly";
import ModalPop from "../components/ModalPop";

export default function Block() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setOutput(Blockly.JavaScript.workspaceToCode(workspace))
  };

  const [workspace, setWorkspace] = useState(null);
  const[output,setOutput] = useState("empty")
  useLayoutEffect(() => {
    Blockly.defineBlocksWithJsonArray([
      {
        type: "repeat_week",
        message0: "Repeat every %1 %2 at %3 %4 %5 %6",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options: [
              ["Monday", "Monday"],
              ["Tuesday", "Tuesday"],
              ["Wednesday", "Wednesday"],
              ["Thursday", "Thursday"],
              ["Friday", "Friday"],
              ["Saturday", "Saturday"],
              ["Sunday", "Sunday"]
            ]
          },
          {
            type: "input_dummy"
          },
          {
            type: "field_input",
            name: "time",
            text: "12"
          },
          {
            type: "field_dropdown",
            name: "NAME",
            options: [
              ["AM", "AM"],
              ["PM", "PM"]
            ]
          },
          {
            type: "input_dummy"
          },
          {
            type: "input_statement",
            name: "steps"
          }
        ],
        inputsInline: true,
        colour: 330,
        tooltip: "",
        helpUrl: ""
      },
      {
        type: "filter",
        message0: "Set  %1 %2 to %3",
        args0: [
          {
            type: "input_dummy"
          },
          {
            type: "field_dropdown",
            name: "parameter",
            options: [
              ["Hiring Manager", "hiring_manager"],
              ["Work Location", "work_location"],
              ["Recruiter", "recruiter"],
              ["Confidential", "confidential"]
            ]
          },
          {
            type: "input_value",
            name: "parameter",
            align: "RIGHT"
          }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: 230,
        tooltip: "Creates a Filter",
        helpUrl: ""
      },
      {
        type: "get_positions",
        message0: "Fetch Positions %1 Search for %2 Filters %3",
        args0: [
          {
            type: "input_dummy"
          },
          {
            type: "input_value",
            name: "search",
            check: "String"
          },
          {
            type: "input_statement",
            name: "NAME",
            check: "filter"
          }
        ],
        previousStatement: null,
        nextStatement: "Array",
        colour: 230,
        tooltip: "",
        helpUrl: ""
      },
      {
        type: "email_to",
        message0: "send email to %1",
        args0: [
          {
            type: "input_value",
            name: "NAME",
            check: "String"
          }
        ],
        previousStatement: ["report", "String"],
        nextStatement: null,
        colour: 105,
        tooltip: "",
        helpUrl: ""
      },
      {
        type: "create_report",
        message0: "Create  %1 report",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options: [
              ["summary", "summary"],
              ["table", "table"]
            ]
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 230,
        tooltip: "",
        helpUrl: ""
      }
    ]);

    /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
    var toolbox = document.getElementById("toolbox");

    var options = {
      toolbox: toolbox,
      collapse: true,
      comments: true,
      disable: true,
      maxBlocks: Infinity,
      trashcan: true,
      horizontalLayout: false,
      toolboxPosition: "start",
      css: true,
      media: "https://blockly-demo.appspot.com/static/media/",
      rtl: false,
      scrollbars: true,
      sounds: true,
      oneBasedIndex: true
    };

    /* Inject your workspace */

    var workspaceInit = Blockly.inject("workspace", options);
    setWorkspace(workspaceInit);
    /* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

    /* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
    var workspaceBlocks = document.getElementById("workspaceBlocks");
    console.log(workspaceBlocks);
    /* Load blocks to workspace. */
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspaceInit);
  }, []);

  return (
    <>
    <ModalPop output={output} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow}/>
     
      
   
      <div dangerouslySetInnerHTML={{ __html: `` }} />
      <div id="workspace" />
      <div id="workspaceBlocks" />
    </>
  );
}
