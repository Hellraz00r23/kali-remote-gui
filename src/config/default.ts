import { SSHConfig, SSHHost } from '../types';

export const USB_DEFAULTS = {
  host: '192.168.42.1',
  port: 22,
  wsPort: 8765,
  username: 'kali',
};

export const TAILSCALE_DEFAULTS = {
  host: '',
  port: 22,
  wsPort: 8765,
  username: 'kali',
};

export const DEFAULT_SSH_CONFIG: SSHConfig = {
  host: '',
  port: 22,
  wsPort: 8765,
  username: '',
  password: '',
  connectionMode: 'usb',
};

export const DEFAULT_HOST: Omit<SSHHost, 'id'> = {
  name: 'Default Kali',
  host: '',
  port: 22,
  wsPort: 8765,
  username: '',
  password: '',
  useKeyAuth: false,
  isDefault: true,
  connectionMode: 'usb',
};

export const APP_CONFIG = {
  commandTimeout: 30000,
  maxHistoryItems: 200,
  terminalMaxLines: 1000,
  reconnectDelay: 3000,
  maxReconnectAttempts: 3,
  maxPayloadSize: 1048576, // 1MB
  rateLimitPerMinute: 30,
};

export const STORAGE_KEYS = {
  HOSTS: '@mobilekali_hosts',
  CURRENT_HOST: '@mobilekali_current_host',
  HISTORY: '@mobilekali_history',
  CUSTOM_TOOLS: '@mobilekali_custom_tools',
  SETTINGS: '@mobilekali_settings',
  CONNECTION_MODE: '@mobilekali_connection_mode',
};
