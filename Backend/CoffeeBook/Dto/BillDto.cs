﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Dto
{
    public class BillDto
    {
        private string address;
        private string name;
        private string phone;
        private string time;
        private string payBy;
        private string note;
        private int totalPrice;
        private List<object> listBill;

        public string Address { get => address; set => address = value; }
        public string Name { get => name; set => name = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Time { get => time; set => time = value; }
        public string PayBy { get => payBy; set => payBy = value; }
        public string Note { get => note; set => note = value; }
        public List<object> ListBill { get => listBill; set => listBill = value; }
        public int TotalPrice { get => totalPrice; set => totalPrice = value; }
    }
}
