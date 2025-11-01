import { useState, useEffect } from 'react';

const STORAGE_KEY = 'chapter_progress';

export const useChapterProgress = () => {
  const [progress, setProgress] = useState({});

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (chapterId, subsectionId, data = {}) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          subsections: {
            ...prev[chapterId]?.subsections,
            [subsectionId]: {
              completed: true,
              completedAt: new Date().toISOString(),
              ...data
            }
          }
        }
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  // Mark chapter as completed
  const completeChapter = (chapterId) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          completed: true,
          completedAt: new Date().toISOString()
        }
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  // Get progress percentage for a chapter
  const getChapterProgress = (chapterId, totalSubsections) => {
    const chapterData = progress[chapterId];
    if (!chapterData) return 0;

    if (chapterData.completed) return 100;

    const completedCount = Object.values(chapterData.subsections || {}).filter(
      sub => sub.completed
    ).length;

    return Math.round((completedCount / totalSubsections) * 100);
  };

  // Check if subsection is completed
  const isSubsectionCompleted = (chapterId, subsectionId) => {
    return progress[chapterId]?.subsections?.[subsectionId]?.completed || false;
  };

  // Get overall progress (all chapters)
  const getOverallProgress = (totalChapters) => {
    const completedChapters = Object.values(progress).filter(
      ch => ch.completed
    ).length;

    return Math.round((completedChapters / totalChapters) * 100);
  };

  // Reset all progress
  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    saveProgress,
    completeChapter,
    getChapterProgress,
    isSubsectionCompleted,
    getOverallProgress,
    resetProgress
  };
};
