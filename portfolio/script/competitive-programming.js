fetch('https://gist.githubusercontent.com/akash-podder/ed35d2bd076088f87c5693833b2818b9/raw/competitive-programming.json')
    .then(res => res.json())
    .then(
        data => {
            document.getElementById('codeforces-solved').innerText = `Codeforces: ${data.codeforces} solves`;
            document.getElementById('leetcode-solved').innerText = `Leetcode: ${data.leetcode} solves`;
            document.getElementById('vjudge-solved').innerText = `Vjudge: ${data.vjudge} solves`;
            document.getElementById('uva-solved').innerText = `UVa Judge: ${data.uva} solves`;
        }
    );
