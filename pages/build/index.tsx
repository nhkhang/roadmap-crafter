import React, { useCallback } from "react";
import ReactFlow, { addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState, MarkerType, Position, Node } from "reactflow";

// import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";
// import "./overview.css";

// const nodeTypes = {
//   custom: CustomNode,
// };

const minimapStyle = {
  height: 120,
};

const initialNodes: Node<{ label: string; selects?: any }, string | undefined>[] = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Input Node",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "Default Node",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: "Output Node",
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "5",
    type: "output",
    data: {
      label: "custom style",
    },
    className: "circle",
    style: {
      background: "#2B6CB0",
      color: "white",
    },
    position: { x: 400, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "6",
    type: "output",
    style: {
      background: "#63B3ED",
      color: "white",
      width: 100,
    },
    data: {
      label: "Node",
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  // {
  //   id: "7",
  //   type: "default",
  //   className: "annotation",
  //   data: {
  //     label: (
  //       <>
  //         On the bottom left you see the <strong>Controls</strong> and the bottom right the <strong>MiniMap</strong>.
  //         This is also just a node 🥳
  //       </>
  //     ),
  //   },
  //   draggable: false,
  //   selectable: false,
  //   position: { x: 150, y: 400 },
  // },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    sourceHandle: 'handle-0',
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    type: 'smoothstep',
    sourceHandle: 'handle-1',
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

const onInit = (reactFlowInstance: any) => console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const customNode = nodes.find((node: any) => node.type === "custom");
      if (customNode) {
        const edgeType = customNode.data.selects[edge.sourceHandle];
        edge.type = edgeType;
      }
    }
  
    return edge;
  });

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      // nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default OverviewFlow;
