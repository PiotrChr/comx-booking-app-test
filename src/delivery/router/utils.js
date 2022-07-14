export const listRoutes = (
  app,
  routes,
  stack,
  parent = '',
) => {
  if (stack) {
    stack.forEach((r) => {
      if (r.route && r.route.path) {
        let method = '';

        for (method in r.route.methods) {
          if (r.route.methods[method]) {
            routes.push({
              method: method.toUpperCase(),
              path: parent + r.route.path,
            });
          }
        }
      } else if (r.handle && r.handle.name == 'router') {
        const routerName = r.regexp.source.replace('^\\', '').replace('\\/?(?=\\/|$)', '');
        return listRoutes(app, routes, r.handle.stack, parent + routerName);
      }
    });
    return routes;
  }
  return listRoutes(app, [], app._router.stack);
};
