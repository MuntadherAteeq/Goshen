class GDate extends Date {
  private monthNames: string[];
  private dayNames: string[];
  private cachedValues: Record<string, string>;

  constructor(dateString?: string | number) {
    super();

    // Cache frequently used values
    this.cachedValues = {
      year: this.getFullYear().toString(),
      month: (this.getMonth() + 1).toString().padStart(2, "0"),
      day: this.getDate().toString().padStart(2, "0"),
      dayOfWeek: this.getDay().toString(),
      hour24: this.getHours().toString().padStart(2, "0"),
      hour12: (this.getHours() % 12 || 12).toString().padStart(2, "0"),
      minute: this.getMinutes().toString().padStart(2, "0"),
      second: this.getSeconds().toString().padStart(2, "0"),
      ampm: this.getHours() >= 12 ? "PM" : "AM",
    };

    // Define the month and day names
    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  formatDate(format: string): string {
    // Create a map of tokens and their replacements
    const tokenMap: Record<string, string> = {
      YYYY: this.cachedValues.year,
      YY: this.cachedValues.year.slice(-2),
      MM: this.cachedValues.month,
      MMM: this.monthNames[this.getMonth()].slice(0, 3),
      MMMM: this.monthNames[this.getMonth()],
      dd: this.cachedValues.day,
      DDD: this.dayNames[parseInt(this.cachedValues.dayOfWeek)].slice(0, 3),
      DDDD: this.dayNames[parseInt(this.cachedValues.dayOfWeek)],
      HH: this.cachedValues.hour24,
      hh: this.cachedValues.hour12,
      mm: this.cachedValues.minute,
      ss: this.cachedValues.second,
      A: this.cachedValues.ampm,
      a: this.cachedValues.ampm.toLowerCase(),
    };

    // Replace the tokens in the format string using the map
    return format.replace(
      /\b(YYYY|YY|MM|MMM|MMMM|dd|DDD|DDDD|HH|hh|mm|ss|A|a)\b/g,
      (match) => {
        return tokenMap[match] || match;
      }
    );
  }
}
