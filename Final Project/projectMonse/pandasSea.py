
import pandas
import numpy
import matplotlib.pyplot as plt
from datetime import datetime



data = pandas.read_csv("outFile_beijing_weather.csv")
data.columns = list(map(lambda x: x.replace(" ", "") , data.columns))


data.YEARMODA = data.YEARMODA.apply(lambda d: datetime.strptime(str(d), "%Y%m%d"))
data.index = data.YEARMODA

start_date = datetime.strptime('1/1/2008', '%m/%d/%Y')

filteredTemp = data[(data.TEMP < 80) & (data.TEMP >50)]

fig, ax = plt.subplots(figsize=(10, 8))
ax.plot(filteredTemp.YEARMODA, filteredTemp.TEMP)

ax.legend(loc='best')
#plt.xticks(numpy.arange(0, 50000, 1.0))
ax.set_xticks(ax.get_xticks()[::])

plt.show()
