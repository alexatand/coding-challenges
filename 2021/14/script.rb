folders = [
  [15,12],
  [4,4],
  [16,14],
  [8,6],
  [11,12],
  [7,8],
  [5,7],
  [10,10],
  [12,9],
  [14,13],
  [2,3],
  [7,7],
  [2,2],
  [5,6],
  [9,6],
  [4,6],
  [13,10],
  [1,1],
  [3,3]
]

sorted_folders = folders.sort { |a, b| [a[0], a[1]] <=> [b[0], b[1]] }
small_folders = []
count = 0
sorted_folders.each_with_index do |folder, index|
  if !small_folders.include? folder
    if index + 1 != sorted_folders.length()
      next_folder = sorted_folders[index+1]
      it_fits = folder[0] < next_folder[0] && folder[1] < next_folder[1]
      if it_fits
        count += 1
      else
        small_folders.push(next_folder)
        n_index = index + 2
        while sorted_folders[n_index]
          it_fits = folder[0] < sorted_folders[n_index][0] && folder[1] < sorted_folders[n_index][1]
          if it_fits
            count += 1
            break
          end
          n_index += 1
        end
      end
    end
  end
end

p "Count: #{count - 1}"
#
# barry = [
# [1, 1],
# [2, 2], #
# [2, 3],
# [3, 3], #
# [4, 4], #
# [4, 6],
# [5, 6], #
# [5, 7],
# [7, 7], #
# [7, 8],
# [8, 6], #
# [9, 6],
# [10, 10], #
# [11, 12], #
# [12, 9],
# [13, 10],
# [14, 13], #
# [15, 12],
# [16, 14]] #

# len = alex.length()
# dp = []
# x = 0
#
#
# while x < len
#   height = alex[x][1]
#   left = 0
#   right = dp.length
#   while left < right
#     mid = (left + right)
#   end
#   p x
#   x+=1
# end

# barry.each_with_index do |folder, index|
#   if barry[index + 1] && folder[0] < barry[index+1][0]
#     ok_folders.push(folder)
#   end
# end
#
# ok_folders.each_with_index do |folder, index|
#   if ok_folders[index + 1] && folder[1] < ok_folders[index+1][1]
#     super_ok_folders.push(folder)
#   end
# end
#
#
# p super_ok_folders

# #
# count = 0
#
# alex = folders.map {|x| x[0] + x[1]}.sort()
#
# while count < alex.length
#   if alex[count] + 2 <= alex[count + 1]
#     p "Current Folder #{alex[count]}, doex it fit into #{alex[count + 1]}, yes"
#   end
#   p alex[count]
#   count +=1
# end
# #
# p alex
#
# alex.each_with_index do |folder, index|
#   does_it_fit = folder + 2 <= alex[index+1]
#   if does_it_fit
#     count +=1
#   end
#   p "Current Folder #{folder}, doex it fit into #{alex[index + 1]}, #{does_it_fit}"
# end
# #
# # current_biggest_folder = 0
# #
# # alex.each_with_index do |folder, index|
# #   if index == 1
# #     current_biggest_folder = folder
# #   end
# #   p "Current Biggest Folder: #{current_biggest_folder}"
# #   if current_biggest_folder + 2 <= alex[index + 1]
# #     p "Current Biggest Folder plus 2 is bigger or eq than #{alex[index + 1]}"
# #     count += 1
# #   else
# #     current_biggest_folder = folder
# #   end
# # end
# #
# # p count
# #
# # # alex.map.each_cons(2) do |first, second|
# # #   p first
# # #   p second
# # #   p '-'
# # #   if second >= first +2
# # #     count += 1
# # #     p 'Adding'
# # #     current_biggest_folder = second
# # #   end
# # # end
# # #
# # # p count
