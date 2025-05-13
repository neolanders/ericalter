'use client';
import React, { useState } from 'react';
import Layout from '@components/Layout/Layout';
import Seo from '@components/Seo/Seo';

const seo = {
  title: 'Playground | Your Name',
  description: 'Explore interactive demos and experiments showcasing various web technologies and components.',
  keywords: ['playground', 'demos', 'experiments', 'web components', 'interactive'],
  ogImage: '/playground-og.jpg',
};

const demos = [
  {
    id: 1,
    title: 'Interactive Card',
    description: 'A card component with hover effects and animations.',
    component: 'InteractiveCard',
  },
  {
    id: 2,
    title: 'Color Picker',
    description: 'A color picker with real-time preview.',
    component: 'ColorPicker',
  },
  {
    id: 3,
    title: 'Todo List',
    description: 'A simple todo list with local storage.',
    component: 'TodoList',
  },
];

const InteractiveCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 bg-white rounded-lg shadow-md transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2 shadow-xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold mb-2">Interactive Card</h3>
      <p className="text-gray-600">
        Hover over this card to see the animation effect.
      </p>
    </div>
  );
};

const ColorPicker = () => {
  const [color, setColor] = useState('#0070f3');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Color Picker</h3>
      <div className="space-y-4">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-12"
        />
        <div
          className="w-full h-32 rounded-lg"
          style={{ backgroundColor: color }}
        />
        <p className="text-gray-600">Selected color: {color}</p>
      </div>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Todo List</h3>
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-primary-color text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function PaygroundPage() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const renderDemo = (component: string) => {
    switch (component) {
      case 'InteractiveCard':
        return <InteractiveCard />;
      case 'ColorPicker':
        return <ColorPicker />;
      case 'TodoList':
        return <TodoList />;
      default:
        return null;
    }
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Playground</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Demo List */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Demos</h2>
                <div className="space-y-4">
                  {demos.map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => setSelectedDemo(demo.component)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedDemo === demo.component
                          ? 'bg-primary-color text-white'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-semibold mb-1">{demo.title}</h3>
                      <p className="text-sm opacity-80">{demo.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Preview */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Preview</h2>
                {selectedDemo ? (
                  renderDemo(selectedDemo)
                ) : (
                  <p className="text-gray-600">
                    Select a demo from the list to see it in action.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 