import { Component } from 'vue'
export interface Navigation {
    name: string;
    href: string;
}

export interface Tab {
    title: string;
    subtitle: string;
    background: string;
    text?: string;
    component?: Component,
    componentProp?: any
  }
export interface Timeline {
    title: string;
    subtitle: string;
    date: string;
    description?: string;
    image?: string;
}