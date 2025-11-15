// Mock data for sessions and chat history
export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  timestamp: Date;
  feedback?: "like" | "dislike";
}

export interface Session {
  id: string;
  title: string;
  createdAt: Date;
  messages: Message[];
}

// Mock sessions data
export const mockSessions: Session[] = [
  {
    id: "session-1",
    title: "Company Revenue Analysis",
    createdAt: new Date(2024, 0, 15),
    messages: [
      {
        id: "msg-1",
        role: "user",
        content: "Show me quarterly revenue data",
        timestamp: new Date(2024, 0, 15, 10, 30),
      },
      {
        id: "msg-2",
        role: "assistant",
        content: "Here's the quarterly revenue data for the past year:",
        tableData: {
          headers: ["Quarter", "Revenue ($M)", "Growth (%)", "Region"],
          rows: [
            ["Q1 2023", "45.2", "12.5", "North America"],
            ["Q2 2023", "52.8", "16.8", "North America"],
            ["Q3 2023", "48.6", "7.5", "North America"],
            ["Q4 2023", "61.3", "26.1", "North America"],
          ],
        },
        timestamp: new Date(2024, 0, 15, 10, 30, 5),
      },
    ],
  },
  {
    id: "session-2",
    title: "Product Performance Metrics",
    createdAt: new Date(2024, 0, 18),
    messages: [
      {
        id: "msg-3",
        role: "user",
        content: "What are the top performing products?",
        timestamp: new Date(2024, 0, 18, 14, 20),
      },
      {
        id: "msg-4",
        role: "assistant",
        content: "Based on sales data, here are the top 5 performing products:",
        tableData: {
          headers: ["Product", "Units Sold", "Revenue ($)", "Rating"],
          rows: [
            ["Product Alpha", "12,450", "1,245,000", "4.8/5"],
            ["Product Beta", "9,870", "987,000", "4.6/5"],
            ["Product Gamma", "8,320", "832,000", "4.7/5"],
            ["Product Delta", "7,650", "765,000", "4.5/5"],
            ["Product Epsilon", "6,890", "689,000", "4.4/5"],
          ],
        },
        timestamp: new Date(2024, 0, 18, 14, 20, 3),
      },
    ],
  },
  {
    id: "session-3",
    title: "Customer Demographics",
    createdAt: new Date(2024, 0, 20),
    messages: [
      {
        id: "msg-5",
        role: "user",
        content: "Show customer distribution by age group",
        timestamp: new Date(2024, 0, 20, 9, 15),
      },
      {
        id: "msg-6",
        role: "assistant",
        content: "Here's the customer distribution across different age groups:",
        tableData: {
          headers: ["Age Group", "Customers", "Percentage", "Avg Purchase ($)"],
          rows: [
            ["18-24", "3,240", "15.2%", "156"],
            ["25-34", "7,850", "36.8%", "289"],
            ["35-44", "5,620", "26.4%", "342"],
            ["45-54", "3,120", "14.6%", "298"],
            ["55+", "1,490", "7.0%", "267"],
          ],
        },
        timestamp: new Date(2024, 0, 20, 9, 15, 4),
      },
    ],
  },
];

// Function to generate mock response with table data
export const generateMockResponse = (question: string): Message => {
  const mockTables = [
    {
      headers: ["Metric", "Value", "Change", "Status"],
      rows: [
        ["Active Users", "45,231", "+12.5%", "Growing"],
        ["Conversion Rate", "3.8%", "+0.4%", "Stable"],
        ["Avg Session Time", "8m 32s", "-5.2%", "Declining"],
        ["Bounce Rate", "42.1%", "-2.1%", "Improving"],
      ],
    },
    {
      headers: ["Feature", "Usage", "Satisfaction", "Priority"],
      rows: [
        ["Dashboard", "89%", "4.5/5", "High"],
        ["Reports", "67%", "4.2/5", "Medium"],
        ["Analytics", "54%", "4.7/5", "High"],
        ["Settings", "23%", "3.9/5", "Low"],
      ],
    },
    {
      headers: ["Month", "Sales", "Costs", "Profit"],
      rows: [
        ["January", "$125K", "$78K", "$47K"],
        ["February", "$138K", "$82K", "$56K"],
        ["March", "$152K", "$89K", "$63K"],
        ["April", "$147K", "$91K", "$56K"],
      ],
    },
  ];

  const randomTable = mockTables[Math.floor(Math.random() * mockTables.length)];

  return {
    id: `msg-${Date.now()}`,
    role: "assistant",
    content: `Based on your query about "${question}", here's the relevant data:`,
    tableData: randomTable,
    timestamp: new Date(),
  };
};
