const KEY = "installed_apps";

export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveInstalledApp = (app) => {
  const apps = getInstalledApps();

  // prevent duplicate
  const exists = apps.find((item) => item.id === app.id);
  if (exists) return false;

  const updated = [...apps, app];
  localStorage.setItem(KEY, JSON.stringify(updated));
  return true;
};

export const removeInstalledApp = (id) => {
  const apps = getInstalledApps();
  const updated = apps.filter((app) => app.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
};
