#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re

def extract_ethnic_groups(file_path):
    """Extract all 54 ethnic groups from the text file"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by "DÂN TỘC" to get each ethnic group
    sections = re.split(r'(DÂN TỘC [^\n]+)', content)

    ethnic_groups = []

    # Process sections (they come in pairs: title, content)
    for i in range(1, len(sections), 2):
        if i + 1 < len(sections):
            title = sections[i].strip()
            description = sections[i + 1].strip()

            # Remove "DÂN TỘC " prefix to get the name
            name = title.replace("DÂN TỘC ", "").strip()

            # Clean up the description (remove extra whitespace, newlines)
            description = ' '.join(description.split())

            if description:  # Only add if there's content
                ethnic_groups.append({
                    'name': name,
                    'description': description
                })

    return ethnic_groups

def create_museum_json(ethnic_groups):
    """Create JSON structure for museum with 3 rooms"""

    museum_data = []

    for idx, group in enumerate(ethnic_groups, start=1):
        # Determine which room (1-18: room1, 19-36: room2, 37-54: room3)
        if idx <= 18:
            room = "room1"
        elif idx <= 36:
            room = "room2"
        else:
            room = "room3"

        ethnic_data = {
            "id": idx,
            "name": group['name'],
            "image": f"content_{room}/{idx}.jpg",
            "description": group['description']
        }

        museum_data.append(ethnic_data)

    return museum_data

def main():
    file_path = "/mnt/e/FPTU/Capstone_Project/mln131-project/DÂN_TỘC.txt"

    print("Extracting ethnic groups...")
    ethnic_groups = extract_ethnic_groups(file_path)

    print(f"Found {len(ethnic_groups)} ethnic groups")

    print("\nCreating museum JSON structure...")
    museum_data = create_museum_json(ethnic_groups)

    # Save to JSON file
    output_file = "/mnt/e/FPTU/Capstone_Project/mln131-project/ethnic_groups_museum.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(museum_data, f, ensure_ascii=False, indent=2)

    print(f"\nJSON file created: {output_file}")
    print(f"Total ethnic groups: {len(museum_data)}")

    # Print distribution
    room1 = [e for e in museum_data if e['id'] <= 18]
    room2 = [e for e in museum_data if 19 <= e['id'] <= 36]
    room3 = [e for e in museum_data if e['id'] >= 37]

    print(f"\nDistribution:")
    print(f"Room 1 (content_room1): {len(room1)} ethnic groups (IDs 1-18)")
    print(f"Room 2 (content_room2): {len(room2)} ethnic groups (IDs 19-36)")
    print(f"Room 3 (content_room3): {len(room3)} ethnic groups (IDs 37-54)")

    # Print first few examples
    print("\n=== First 3 ethnic groups ===")
    for i in range(min(3, len(museum_data))):
        print(f"\nID: {museum_data[i]['id']}")
        print(f"Name: {museum_data[i]['name']}")
        print(f"Image: {museum_data[i]['image']}")
        print(f"Description: {museum_data[i]['description'][:200]}...")

if __name__ == "__main__":
    main()
