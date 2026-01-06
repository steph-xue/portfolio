
import { useEffect } from 'react';
import fluidCursor from '@/hooks/use-fluid-cursor';

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);
  return (
    <div>
      <canvas id="fluid" className="fluid-cursor" />
    </div>
  );
};
export default FluidCursor;