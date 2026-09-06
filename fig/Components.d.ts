// Components.d.ts — the complete catalog of the 5 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.IconPlus) and usable directly in JSX.
import * as React from 'react';

// figma layer: "icon/plus" (node 3318:2513)
export interface IconPlusProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "24" | "16" | "20" | "32";
}

// figma layer: "MySetup" (node 3318:2934)
export interface MySetupProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "radio button" (node 3318:2478)
export interface RadioButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "error";
  checked?: boolean;
  focused?: boolean;
  disabled?: boolean;
}

// figma layer: "Step 1" (node 3318:3270)
export interface Step1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Text button" (node 3318:2527)
export interface TextButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  tone?: "default" | "destructive" | "disabled";
  iconLeft?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

declare const IconPlus: React.FC<IconPlusProps>;
declare const MySetup: React.FC<MySetupProps>;
declare const RadioButton: React.FC<RadioButtonProps>;
declare const Step1: React.FC<Step1Props>;
declare const TextButton: React.FC<TextButtonProps>;
declare global {
  interface Window {
    IconPlus: React.FC<IconPlusProps>;
    MySetup: React.FC<MySetupProps>;
    RadioButton: React.FC<RadioButtonProps>;
    Step1: React.FC<Step1Props>;
    TextButton: React.FC<TextButtonProps>;
  }
}
