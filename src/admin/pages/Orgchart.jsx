import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

const Orgchart = () => {
  return (
    <div className="w-full lg:w-9/12 py-4 bg-gray-200 overflow-auto lg:ml-auto lg:mr-auto lg:mt-5 lg:p-5">
      <Tree
    
        label={<div className=" cursor-pointer bg-blue-500 text-white p-4 rounded-lg shadow-lg">CEO</div>}
      >
        <TreeNode label={<div className=" cursor-pointer bg-blue-300 text-white p-4 rounded-lg shadow-lg">CTO</div>}>
          <TreeNode label={<div className=" cursor-pointer bg-blue-200 text-white p-4 rounded-lg shadow-lg">Operation Director</div>}>
            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">General Manager</div>} >
            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">Senior Manager</div>} >
            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg"> Manager</div>} >
            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">Assistant Manager</div>} >

</TreeNode>
            </TreeNode>
            </TreeNode>

            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">Senior Manager</div>} >
            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg"> Manager</div>} >
            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">Assistant Manager</div>} >
            <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">Production Executive</div>} />

            </TreeNode>
            </TreeNode>
            </TreeNode>

            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<div className=" cursor-pointer bg-green-300 text-white p-4 rounded-lg shadow-lg">CFO</div>}>
          <TreeNode label={<div className=" cursor-pointer bg-green-200 text-white p-4 rounded-lg shadow-lg">Account Manager</div>} >
          <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">Assistant Account Manager</div>} />
          <TreeNode label={<div className=" cursor-pointer bg-blue-100 text-gray-800 p-4 rounded-lg shadow-lg">Senior Account officer</div>} />
        </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
};

export default Orgchart;
