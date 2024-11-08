
        function createCalendar(elem, year, month) {
            let firstDay = new Date(year, month -1, 1);
            let lastDay = new Date(year, month, 0);
            let table = document.createElement("table");
            let headerRow = document.createElement("tr");
            const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            daysOfWeek.forEach(day => {
                let th = document.createElement("th");
                th.textContent = day;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            let date = 1;
            let row = document.createElement("tr");
            for (let i = 0; i < (firstDay.getDay() || 7) ; i++) {
                row.appendChild(document.createElement("td"));
            }
            while (date <= lastDay.getDate()) {
                let cell = document.createElement("td");
                cell.textContent = date;
                row.appendChild(cell);
                if ((firstDay.getDay() + date - 1) % 7 === 6) {
                    table.appendChild(row);
                    row = document.createElement("tr");
                }

                date++;
            }
            if (row.children.length > 0) {
                table.appendChild(row);
            }
            elem.appendChild(table);
        }
        const calendarElem = document.getElementById("calendar");
        createCalendar(calendarElem, 2024, 5);
