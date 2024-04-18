import axios, { AxiosRequestConfig } from 'axios'
import { Component } from 'react'

export const axiosBase = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const axiosAuth = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export class BaseService extends Component {
  public static async fetch<T>(props: AxiosRequestConfig) {
    return await axiosBase.request<T>(props)
  }
}

export class AuthService extends Component {
  public static async fetch<T>(props: AxiosRequestConfig) {
    return await axiosAuth.request<T>(props)
  }
}
