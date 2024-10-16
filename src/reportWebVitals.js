import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => { // Removed the type annotation for onPerfEntry
  if (onPerfEntry && typeof onPerfEntry === 'function') { // Changed instanceof Function to typeof check
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
