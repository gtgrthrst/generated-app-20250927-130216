import React, { useEffect } from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { categories, convert } from '@/lib/conversions';
import { useConverterStore, useConverterActions } from '@/store/converter';
const formatResult = (value: number): string => {
  if (isNaN(value) || !isFinite(value)) return '';
  // Use exponential for very small numbers to avoid long strings of zeros
  if (Math.abs(value) < 1e-6 && value !== 0) return value.toExponential(6);
  // Round to a reasonable number of decimal places and remove trailing zeros
  const str = value.toFixed(6);
  return parseFloat(str).toString();
};
export function Converter() {
  const { category, fromUnit, toUnit, fromValue, toValue } = useConverterStore();
  const { setCategory, setFromUnit, setToUnit, setFromValue, setToValue, swapUnits } = useConverterActions();
  useEffect(() => {
    const numValue = parseFloat(fromValue);
    if (fromValue === '' || isNaN(numValue)) {
      setToValue('');
      return;
    }
    const result = convert(numValue, fromUnit, toUnit, category);
    setToValue(formatResult(result));
  }, [fromValue, fromUnit, toUnit, category, setToValue]);
  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow numbers, a single decimal point, and a leading negative sign
    if (/^-?\d*\.?\d*$/.test(value) || value === '-') {
      setFromValue(value);
    }
  };
  const currentUnits = categories[category].units;
  return (
    <Card className="w-full max-w-md bg-background/80 backdrop-blur-sm border-2 border-border">
      <CardContent className="p-6 space-y-6">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="h-12 text-base focus:ring-offset-background focus:ring-ring">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(categories).map((cat) => (
              <SelectItem key={cat} value={cat} className="text-base">
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex flex-col space-y-4 relative">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              inputMode="decimal"
              value={fromValue}
              onChange={handleFromValueChange}
              className="h-12 text-lg caret-lime-400 focus:ring-offset-background focus:ring-ring"
              placeholder="0"
            />
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-[150px] h-12 text-base focus:ring-offset-background focus:ring-ring">
                      <SelectValue />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{currentUnits.find(u => u.symbol === fromUnit)?.definition}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <SelectContent>
                {currentUnits.map((unit) => (
                  <SelectItem key={unit.symbol} value={unit.symbol} className="text-base">
                    {unit.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={swapUnits}
              className="text-muted-foreground hover:text-lime-400 transition-colors duration-200"
              aria-label="Swap units"
            >
              <ArrowRightLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              readOnly
              value={toValue}
              className="h-12 text-lg bg-muted/50 border-dashed"
              placeholder="0"
              aria-label="Conversion result"
            />
            <Select value={toUnit} onValueChange={setToUnit}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SelectTrigger className="w-[150px] h-12 text-base focus:ring-offset-background focus:ring-ring">
                      <SelectValue />
                    </SelectTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{currentUnits.find(u => u.symbol === toUnit)?.definition}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <SelectContent>
                {currentUnits.map((unit) => (
                  <SelectItem key={unit.symbol} value={unit.symbol} className="text-base">
                    {unit.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}