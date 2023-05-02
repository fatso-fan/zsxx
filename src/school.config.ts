export const DEBUG = import.meta.env.DEV

export const apiUrl = DEBUG ? '/api' : '/api'
