export type MemoryId =
  | 'welcome'
  | 'how-we-met'
  | 'voice'
  | 'reaction'
  | 'reasons'
  | 'funny'
  | 'future'
  | 'song'
  | 'wish';

export interface StarPosition {
  /** Percentage-based position so the sky stays responsive at any size */
  top: string;
  left: string;
}

export interface MemoryDefinition {
  id: MemoryId;
  /** Short label shown only after the star has been discovered */
  label: string;
  position: StarPosition;
}

export type Screen = 'home' | 'sky' | 'finale';
