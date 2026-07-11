import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_GROUPS } from '../data';
import { Code, Terminal, CheckCircle, Database, ChevronRight, BookOpen, Layers, ShieldCheck } from 'lucide-react';

interface DSATopic {
  id: string;
  name: string;
  category: string;
  timeComplexity: string;
  spaceComplexity: string;
  pattern: string;
  description: string;
  code: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'grid' | 'dsa'>('grid');
  const [selectedDSATopic, setSelectedDSATopic] = useState<string>('binary-search');

  const dsaTopics: DSATopic[] = [
    {
      id: 'binary-search',
      name: 'Binary Search',
      category: 'Searching & Sorting',
      timeComplexity: 'O(log N)',
      spaceComplexity: 'O(1)',
      pattern: 'Decrease and Conquer',
      description: 'Optimal search mechanism on sorted arrays by repeatedly halving the search space.',
      code: `public class BinarySearch {
    public static int search(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // Prevents overflow

            if (arr[mid] == target) {
                return mid; // Target found
            }
            if (arr[mid] < target) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
        return -1; // Target not present
    }
}`
    },
    {
      id: 'reverse-ll',
      name: 'Reverse Linked List',
      category: 'Data Structures',
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(1)',
      pattern: 'Pointer Manipulation',
      description: 'Reversing a singly linked list in-place by maintaining previous, current, and next pointers.',
      code: `public class LinkedListReversal {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode nextTemp = curr.next; // Store next node
            curr.next = prev;              // Reverse pointer direction
            prev = curr;                   // Move prev forward
            curr = nextTemp;               // Move curr forward
        }
        return prev; // New head of reversed list
    }
}`
    },
    {
      id: 'quick-sort',
      name: 'Quick Sort (Partitioning)',
      category: 'Searching & Sorting',
      timeComplexity: 'O(N log N) avg',
      spaceComplexity: 'O(log N) stack',
      pattern: 'Divide and Conquer',
      description: 'Standard divide-and-conquer sorting algorithm utilizing in-place array partitioning about a pivot.',
      code: `public class QuickSort {
    public void sort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            sort(arr, low, pivotIndex - 1);  // Sort left partition
            sort(arr, pivotIndex + 1, high); // Sort right partition
        }
    }

    private int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choosing last element as pivot
        int i = (low - 1);     // Index of smaller element

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // Swap arr[i+1] and pivot
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}`
    },
    {
      id: 'dp-knapsack',
      name: '0/1 Knapsack (Dynamic Programming)',
      category: 'Dynamic Programming',
      timeComplexity: 'O(N * W)',
      spaceComplexity: 'O(N * W)',
      pattern: 'Tabulation (Bottom-Up)',
      description: 'Classic DP approach to select items to maximize total value without exceeding weight capacity W.',
      code: `public class Knapsack {
    public int solveKnapsack(int[] val, int[] wt, int W) {
        int N = val.length;
        int[][] dp = new int[N + 1][W + 1];

        // Build DP table in bottom-up manner
        for (int i = 0; i <= N; i++) {
            for (int w = 0; w <= W; w++) {
                if (i == 0 || w == 0) {
                    dp[i][w] = 0;
                } else if (wt[i - 1] <= w) {
                    dp[i][w] = Math.max(
                        val[i - 1] + dp[i - 1][w - wt[i - 1]], 
                        dp[i - 1][w]
                    );
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[N][W]; // Optimal value
    }
}`
    }
  ];

  const selectedTopicData = dsaTopics.find(t => t.id === selectedDSATopic) || dsaTopics[0];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs text-cyan-400 tracking-widest uppercase mb-3">
            Competencies
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Technical Arsenal & DSA Engine
          </h3>
          <p className="text-zinc-400 text-sm font-sans font-light">
            An overview of my tech stack alongside my interactive Java Data Structures & Algorithms (DSA) playground to showcase my core problem-solving competencies.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex justify-center mb-12 max-w-md mx-auto p-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl">
          <button
            onClick={() => setActiveTab('grid')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex-1 justify-center ${
              activeTab === 'grid'
                ? 'bg-zinc-800 text-cyan-400'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers size={14} />
            <span>Tech Stack</span>
          </button>
          <button
            onClick={() => setActiveTab('dsa')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex-1 justify-center ${
              activeTab === 'dsa'
                ? 'bg-zinc-800 text-cyan-400'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BookOpen size={14} />
            <span>Java DSA Showcase</span>
          </button>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {SKILL_GROUPS.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-6 shadow-lg backdrop-blur-sm hover:border-zinc-700/80 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                      {group.category === 'Languages' && <Terminal size={16} />}
                      {group.category === 'Frameworks & Libraries' && <Layers size={16} />}
                      {group.category === 'Tools & Platforms' && <Database size={16} />}
                      {group.category === 'Core Concepts' && <ShieldCheck size={16} />}
                    </div>
                    <h4 className="font-display font-extrabold text-zinc-100 text-sm tracking-wide">
                      {group.category}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {group.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="flex items-center gap-2 py-1.5 px-2 rounded-xl hover:bg-zinc-950/40 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/80" />
                        <span className="text-zinc-300 text-xs font-mono font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="dsa"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* DSA Selector Sidebar */}
              <div className="lg:col-span-4 space-y-3 flex flex-col justify-start">
                <div className="p-4 bg-zinc-900/40 border border-zinc-850/60 rounded-3xl mb-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Java Algorithm Repository</span>
                  <p className="text-zinc-400 text-xs font-sans mt-1 leading-relaxed">
                    Interactive visualization of core Data Structures & Algorithms written clean in standard Java.
                  </p>
                </div>

                {dsaTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedDSATopic(topic.id)}
                    className={`flex flex-col items-start gap-1 p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      selectedDSATopic === topic.id
                        ? 'bg-zinc-900 border-cyan-500/30 shadow-md shadow-cyan-500/5'
                        : 'bg-zinc-950 border-zinc-900 hover:border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-display font-bold text-zinc-200 text-sm group-hover:text-white">
                        {topic.name}
                      </span>
                      <span className="text-[9px] font-mono font-semibold bg-zinc-950 text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-xl uppercase">
                        {topic.timeComplexity}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono mt-1">
                      {topic.category}
                    </span>
                  </button>
                ))}
              </div>

              {/* Code Visualizer Panel */}
              <div className="lg:col-span-8 flex flex-col bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                
                {/* Meta Header */}
                <div className="p-5 border-b border-zinc-800 bg-zinc-900/60 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-extrabold text-zinc-100 text-lg">
                      {selectedTopicData.name}
                    </h4>
                    <p className="text-zinc-400 text-xs font-sans mt-0.5 font-light">
                      {selectedTopicData.description}
                    </p>
                  </div>

                  {/* Complexity Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex flex-col items-end bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-2xl">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase">Time</span>
                      <span className="text-xs font-mono font-bold text-cyan-400">{selectedTopicData.timeComplexity}</span>
                    </div>
                    <div className="flex flex-col items-end bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-2xl">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase">Space</span>
                      <span className="text-xs font-mono font-bold text-purple-400">{selectedTopicData.spaceComplexity}</span>
                    </div>
                    <div className="flex flex-col items-end bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-2xl">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase">Pattern</span>
                      <span className="text-xs font-mono font-semibold text-zinc-300">{selectedTopicData.pattern}</span>
                    </div>
                  </div>
                </div>

                {/* IDE Code window */}
                <div className="flex-1 p-5 font-mono text-xs overflow-auto bg-zinc-950/80 text-zinc-300 relative">
                  {/* Decorative window circles */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-40">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>

                  <pre className="language-java whitespace-pre-wrap leading-relaxed tab-size-4">
                    <code>
                      {selectedTopicData.code}
                    </code>
                  </pre>
                </div>

                {/* IDE status bar */}
                <div className="p-3 border-t border-zinc-800 bg-zinc-950/90 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>JVM Compilation Successful</span>
                  </div>
                  <span>Java 17 (LTS) | {selectedTopicData.id}.java</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
